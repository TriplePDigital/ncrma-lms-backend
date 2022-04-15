export default {
	name: "checkpoint",
	title: "Checkpoint",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Checkpoint title",
			type: "string",
			required: true,
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			required: true,
			options: {
				source: "title",
				maxLength: 200, // will be ignored if slugify is set
				slugify: input => input
					.toLowerCase()
					.replace(/\s+/g, '-')
					.slice(0, 200)
			}
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{ name: "quiz", type: "reference", to: { type: "quiz" } },
				{ name: "video", type: "reference", to: { type: "video" } },
			],
			required: true,
		},
	],
};
