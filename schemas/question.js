export default {
	name: "question",
	title: "Question",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Question Title",
			type: "markdown",
		},
		{
			name: "answers",
			title: "Answers",
			type: "array",
			of: [
				{
					type: "answer",
				},
			],
		},
	],
	preview: {
		select: {
			title: "title",
		},
	},
};
