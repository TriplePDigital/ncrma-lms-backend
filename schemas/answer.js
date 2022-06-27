export default {
	name: "answer",
	title: "Answer",
	type: "object",
	initialValue: {
		correct: false,
	},
	fields: [
		{
			name: "answers",
			title: "Answers",
			type: "string",
		},
		{
			name: "correct",
			title: "Is this the correct answer?",
			type: "boolean",
			initialValue: false,
			required: true,
		},
	],
	preview: {
		select: {
			title: "answers",
			subtitle: "correct",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: subtitle ? "✅ " : "❌",
			};
		},
	},
};
