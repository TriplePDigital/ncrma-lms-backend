import client from "part:@sanity/base/client";

const isUniqueUser = async (email, context) => {
	const { document } = context;

	const id = document._id.replace(/^drafts\./, "");
	const params = {
		email,
		published: id,
		draft: `drafts.${id}`,
	};

	/* groq */
	const query = `!defined(*[
    	_type == 'user' &&
		!(_id in [$draft, $published]) &&
    	email == $email
  	][0])`;

	const res = await client.fetch(query, params);

	console.log(res);

	return res;
};

export default {
	name: "user",
	title: "User",
	type: "document",
	fields: [
		{
			name: "account_id",
			title: "Database Account ID",
			type: "string",
			readOnly: ({ currentUser }) => {
				return !currentUser.roles.find(({ name }) => name === "administrator");
			},
		},
		{
			name: "role",
			title: "Role and Permission",
			type: "string",
			readOnly: ({ currentUser }) => {
				return !currentUser.roles.find(({ name }) => name === "administrator");
			},
			options: {
				list: [
					{ title: "Administrator", value: "admin" },
					{ title: "Risk Manager", value: "riskManager" },
					{ title: "Student", value: "student" },
				],
				layout: "dropdown",
			},
		},
		{
			name: "firstName",
			title: "First Name",
			type: "string",
		},
		{
			name: "lastName",
			title: "Last Name",
			type: "string",
		},
		{
			name: "email",
			title: "Email",
			type: "string",
			required: true,
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					const isUnique = await isUniqueUser(value, context);
					if (!isUnique) return "User needs a unique email address";
					return true;
				}),
		},
		{
			name: "image",
			title: "Image",
			type: "url",
			hidden: true,
		},
		{
			name: "avatar",
			title: "Avatar",
			type: "image",
			options: {
				hotspot: true,
			},
			initialValue: {
				// url: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
				asset: {
					_ref: "image-4cbc016db58978f0d4f4623f43c495a40c78a1aa-5760x3840-jpg",
					_type: "reference",
				},
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "active",
			title: "Active",
			type: "boolean",
			initialValue: false,
		},
		{
			name: "discountUsage",
			title: "Discounts remaining",
			description: "How many discounted course track purchases are left.",
			type: "number",
			initialValue: 0,
		},
		{
			// this is only if you use credentials provider
			// TODO: implement email password authentication
			name: "password",
			type: "string",
			hidden: true,
		},
		{
			name: "membership",
			title: "Membership Tier",
			type: "string",
			options: {
				list: [
					{ title: "Individual", value: "individual" },
					{ title: "COE Company", value: "coeCompany" },
					{ title: "Company", value: "company" },
					{ title: "Captive", value: "captive" },
					{ title: "Service Partner", value: "servicePartner" },
					{ title: "Continuing Educator", value: "continuingEducator" },
					{ title: "Appointed Broker", value: "appointedBroker" },
				],
				layout: "dropdown",
			},
		},
		{
			name: "membershipType",
			title: "Membership Type",
			type: "reference",
			to: { type: "membership" },
		},
		{
			name: "achievements",
			title: "Completed Certificates",
			type: "array",
			default: [],
			of: [
				{
					name: "certification",
					type: "reference",
					to: { type: "certification" },
				},
			],
		},
		//TODO: implement a way to track the user's login history
		{
			name: "lastLogin",
			title: "Last Login",
			type: "datetime",
			readOnly: true,
		},
	],
	preview: {
		select: {
			title: "firstName",
			subtitle: "lastName",
			media: "avatar",
			email: "email",
		},
		prepare({ title, subtitle, media, email }) {
			return {
				title: `${title} ${subtitle}`,
				subtitle: email,
				media,
			};
		},
	},
};
