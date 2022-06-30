export default {
	name: "webinar",
	title: "Webinar",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "startingAt",
			title: "Starting At",
			type: "datetime",
			required: true,
			options: {
				dateFormat: "YYYY-MM-DD",
				timeFormat: "HH:mm",
				timeStep: 15,
				calendarTodayLabel: "Today",
			},
			// validation: (Rule) => Rule.custom((value) => {
			// 	if (value) {
			// 		const now = new Date();
			// 		const startingAt = new Date(value);
			// 		if (startingAt < now) {
			// 			return "Starting at must be in the future";
			// 		}
			// 	}
			// 	return true;
			// }),
		},
		{
			name: "endingAt",
			title: "Ending At",
			type: "datetime",
			required: true,
			options: {
				dateFormat: "YYYY-MM-DD",
				timeFormat: "HH:mm",
				timeStep: 15,
				calendarTodayLabel: "Today",
			},
			// validation: (Rule) => Rule.custom((value) => {
			// 	if (value) {
			// 		const now = new Date();
			// 		const endingAt = new Date(value);
			// 		if (endingAt < now) {
			// 			return "Ending at must be in the future";
			// 		}
			// 	}
			// 	return true;
			// }),
		},
		{
			name: "purchaseLink",
			title: "Purchase Link",
			type: "url",
			required: true,
		},
		{
			name: "joinLink",
			title: "Join Link",
			type: "url",
			required: true,
		},
		{
			name: "downloadLink",
			title: "Download Link",
			type: "url",
			required: true,
		},
		{
			name: "presenters",
			title: "Presenters",
			type: "array",
			of: [{ type: "reference", to: { type: "instructor" } }],
		},
		{
			name: "agenda",
			title: "Agenda",
			type: "array",
			of: [
				{
					name: "agendaItem",
					title: "Agenda Item",
					type: "object",
					fields: [
						{
							name: "title",
							title: "Title",
							type: "string",
						},
						{
							name: "startTime",
							title: "Start Time",
							type: "datetime",
						},
						{
							name: "endTime",
							title: "End Time",
							type: "datetime",
						},
						{
							name: "host",
							title: "Host",
							type: "reference",
							to: { type: "instructor" },
						},
					],
					preview: {
						select: {
							title: "title",
							subtitle: "startTime",
							description: "endTime",
						},
					},
				},
			],
		},
	],
	orderings: [
		{
			title: "Starting At Date, New",
			name: "releaseDateDesc",
			by: [{ field: "startingAt", direction: "desc" }],
		},
		{
			title: "Starting At Date, Old",
			name: "releaseDateAsc",
			by: [{ field: "startingAt", direction: "asc" }],
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
		},
	},
};
