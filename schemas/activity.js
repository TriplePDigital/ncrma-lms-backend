export default {
	name: "activity",
	title: "Activity",
	type: "document",
	fields: [
		{
			name: "user",
			type: "reference",
			description: "The user who performed the activity",
			to: [{ type: "user" }],
		},
		{
			name: "content",
			type: "reference",
			description: "The content that was completed or worked on",
			to: [{ type: "mission" }, { type: "stage" }, { type: "checkpoint" }],
		},
		{
			name: "progress",
			type: "number",
			description: "The progress made on the checkpoint",
		}
	],
	preview: {
		select: {
			title: "user.firstName",
			subtitle: "user.lastName",
			content: "content.title",
			progress: "progress",
		},
		prepare({ title, subtitle, content, progress }) {
			return {
				title: `${progress} completed ${content} by ${title} ${subtitle}`,
			};
		},
	},
};
