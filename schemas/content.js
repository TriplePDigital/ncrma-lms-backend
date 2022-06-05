export default {
	name: "content",
	title: "Content",
	type: "document",
	fields: [
		{
			name: "checkpoint",
			title: "Checkpoint",
			type: "reference",
			to: { type: "checkpoint" },
			validation: (Rule) => Rule.required(),
		},
		{
			name: "type",
			title: "Type",
			type: "array",
			of: [
				{ name: "quiz", type: "reference", to: { type: "quiz" } },
				{ name: "video", type: "reference", to: { type: "video" } },
			],
			validation: (Rule) => Rule.required(),
		},
	],
};
