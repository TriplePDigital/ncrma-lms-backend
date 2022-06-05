export default {
	name: "checkpoint",
	title: "Checkpoint",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Checkpoint title",
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
				maxLength: 200, // will be ignored if slugify is set
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			name: "order",
			title: "Numeric Place in chapter",
			type: "number",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "stage",
			title: "Stage",
			type: "reference",
			to: { type: "stage" },
		},
		{
			name: "instance",
			title: "Instance",
			type: "string",
			options: {
				list: [
					{ title: "Video", value: "video" },
					{ title: "Quiz", value: "quiz" },
				],
			},
		},
		{
			name: "type",
			title: "Type",
			type: "reference",
			to: [{ type: "quiz" }, { type: "video" }],
			validation: (Rule) => Rule.required(),
		},
	],
};
