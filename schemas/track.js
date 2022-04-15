export default {
	name: "track",
	title: "Course Track",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Track Name",
			type: "string",
		},
		{
			name: "enrolled",
			title: "Enrolled",
			type: "array",
			of: [{ name: "user", type: "reference", to: { type: "user" } }],
		},
		{
			name: "achievement",
			title: "Achievement",
			description:
				"Achievement received by the user for the completion of all missions in the track",
			type: "reference",
			to: { type: "certification" },
		},
		{
			name: "missions",
			title: "Missions",
			type: "array",
			of: [{ name: "mission", type: "reference", to: { type: "mission" } }],
		},
	],
};
