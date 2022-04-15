export default {
	name: "certification",
	title: "Certification",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "description",
			title: "Description",
			type: "markdown",
			options: {
				minRows: 15,
			},
		},
		{
			name: "track",
			title: "Track & Mission(s)",
			description:
				"Select the track and/or missions that are required for the completion of this certification.",
			type: "array",
			of: [
				{ name: "track", type: "reference", to: { type: "track" } },
				{ name: "mission", type: "reference", to: { type: "mission" } },
			],
		},
	],
};
