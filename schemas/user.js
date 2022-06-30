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
			validation: (Rule) => Rule.required(),
		},
		{
			name: "active",
			title: "Active",
			type: "boolean",
			initialValue: false,
		},
		{
			// this is only if you use credentials provider
			// TODO: implement email password authentication
			name: "password",
			type: "string",
			hidden: true,
		},
		{
			name: "enrollment",
			title: "Enrollment",
			type: "array",
			of: [
				{ name: "enrollment", type: "reference", to: { type: "enrollment" } },
			],
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
			name: "achievements",
			title: "Completed Certificates",
			type: "array",
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
