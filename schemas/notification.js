export default {
	name: "notification",
	title: "Notification",
	type: "document",
	fields: [
		{
			name: "cause",
			title: "Cause",
			type: "string",
			options: {
				list: [
					{ title: "Purchase", value: "purchase" },
					// {title: "Quiz", value: "quiz"},
					// {title: "Certification", value: "certification"},
				],
			},
		},
		{
			name: "recipient",
			title: "Recipient",
			type: "array",
			of: [{ type: "string" }],
		},
	],
};
