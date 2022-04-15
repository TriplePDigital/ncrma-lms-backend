export default {
	name: "explorer",
	title: "Explorer",
	type: "document",
	fields: [
		{
			name: "fullName",
			title: "Full Name",
			type: "string",
		},
		{
			name: "ID",
			title: "ID",
			type: "string",
		},
		{
			name: "avatar",
			title: "Explorer Avatar",
			type: "string",
		},
		{
			name: "missions",
			title: "Missions",
			type: "array",
			of: [{ name: "mission", type: "reference", to: { type: "mission" } }],
		},
		{
			name: "achievements",
			title: "Achievements",
			type: "array",
			of: [
				{
					name: "certification",
					type: "reference",
					to: { type: "certification" },
				},
				{ name: "mission", type: "reference", to: { type: "mission" } },
				{ name: "stage", type: "reference", to: { type: "stage" } },
			],
		},
	],
};
