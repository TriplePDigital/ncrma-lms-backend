export default {
	name: "marketing",
	title: "Marketing Promotions",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Campaign Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			description:
				"This is the URL for the campaign that will be used in marketing emails and promo links.",
			type: "slug",
			options: {
				source: "name",
			},
		},
		{
			name: "content",
			title: "Content",
			type: "markdown",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "expires",
			title: "Expires",
			type: "date",
		},
		{
			name: "list",
			title: "Sign Up List",
			type: "array",
			of: [
				{
					name: "person",
					type: "object",
					fields: [
						{
							name: "email",
							title: "Email",
							type: "string",
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
					],
					preview: {
						select: {
							firstName: "firstName",
							lastName: "lastName",
							email: "email",
						},
						prepare(selection) {
							return {
								title: `${selection.firstName} ${selection.lastName}`,
								subtitle: selection.email,
							};
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: "name",
			subtitle: "expires",
			media: "image",
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: `Expires: ${selection.subtitle}`,
				media: selection.media,
			};
		},
	},
};
