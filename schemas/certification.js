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
			name: "missions",
			title: "Mission(s) included",
			description:
				"Select the missions that are required for the completion of this certification.",
			type: "array",
			of: [{ name: "mission", type: "reference", to: { type: "mission" } }],
		},
	],
};
