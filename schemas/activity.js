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
			name: "mission",
			type: "reference",
			description: "The mission that was completed or worked on",
			to: [{ type: "mission" }],
		},
		{
			name: "stage",
			type: "reference",
			description: "The stage that was completed or worked on",
			to: [{ type: "stage" }],
		},
		{
			name: "checkpoint",
			type: "reference",
			description: "The checkpoint that was completed or worked on",
			to: [{ type: "checkpoint" }],
		},
		{
			name: "progress",
			type: "number",
			description: "The progress made on the checkpoint",
		}
	],
};
