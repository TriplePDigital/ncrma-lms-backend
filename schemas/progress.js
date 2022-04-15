export default {
	name: "progress",
	title: "User Progress",
	type: "document",
	fields: [
		{
			name: "completedCheckpoints",
			title: "Completed Checkpoints",
			type: "array",
			of: [{ type: "reference", to: [{ type: "checkpoint" }] }],
		},
		{
			name: "completedStages",
			title: "Completed Stages",
			type: "array",
			of: [{ type: "reference", to: [{ type: "stage" }] }],
		},
		{
			name: "completedMissions",
			title: "Completed Missions",
			type: "array",
			of: [{ type: "reference", to: [{ type: "mission" }] }],
		},
		{
			name: "user",
			title: "User",
			type: "reference",
			to: { type: "user" },
		},
		{
			name: "inProgress",
			title: "In Progress",
			type: "array",
			of: [
				{
					type: "object",
					name: "inProgressMission",
					fields: [
						{
							name: "mission",
							title: "Mission In Progress",
							type: "reference",
							to: { type: "mission" },
						},
						{
							name: "progress",
							title: "Progress",
							type: "number",
							validation: (Rule) => Rule.min(0).max(100),
						},
					],
					preview: {
						select: {
							progress: "progress",
						},
						prepare(value) {
							const { progress } = value;
							return {
								title: `${progress}%`,
							};
						},
					},
				},
				{
					type: "object",
					name: "inProgressStage",
					fields: [
						{
							name: "stage",
							title: "Stage In Progress",
							type: "reference",
							to: { type: "stage" },
						},
						{
							name: "progress",
							title: "Progress",
							type: "number",
							validation: (Rule) => Rule.min(0).max(100),
						},
					],
					preview: {
						select: {
							progress: "progress",
						},
						prepare(value) {
							const { progress } = value;
							return {
								title: `${progress}%`,
							};
						},
					},
				}
			],
		},
	],
};
