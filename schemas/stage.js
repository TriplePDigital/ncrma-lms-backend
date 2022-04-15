export default {
	name: "stage",
	title: "Stage",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule) => Rule.required(),
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "duration",
			title: "Estimate duration in minutes",
			type: "number",
			validation: (num) => num.min(0),
		},
		{
			name: "checkpoints",
			title: "Checkpoints",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "checkpoint" }],
				},
			],
		},
	],
};
