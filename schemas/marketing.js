export default {
	name: "marketing",
	title: "Marketing Promotions",
	type: "document",
	fields: [
		{
			name: "campaign",
			title: "Campaign",
			type: "string",
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
			title: "campaign",
			media: "image",
		},
	},
};
