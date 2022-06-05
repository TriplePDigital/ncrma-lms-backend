export default {
	name: "instructor",
	title: "Instructor",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Instructor Name",
			type: "string",
		},
		{
			name: "email",
			title: "Instructor Email",
			type: "string",
		},
		{
			name: "avatar",
			title: "Instructor Avatar",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "company",
			title: "Company",
			type: "string",
		},
		{
			name: "social",
			title: "Social",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "bio",
			title: "Biography",
			type: "markdown",
			options: {
				minRows: 15,
			},
		},
		{
			name: "stages",
			title: "Stages",
			type: "array",
			of: [
				{
					type: "reference",
					to: { type: "stage" },
				},
			],
		},
	],
};
