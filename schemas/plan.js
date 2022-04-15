import React from "react";

export default {
	name: "plan",
	title: "Plan",
	type: "document",
	fields: [
		{
			name: "user",
			title: "User",
			type: "reference",
			to: { type: "user" },
		},
		{
			name: "missions",
			title: "Missions",
			type: "array",
			of: [{ type: "reference", to: { type: "mission" } }],
		},
		{
			name: "quizAttempts",
			title: "Quiz Attempts",
			type: "array",
			of: [{ type: "reference", to: { type: "quizAttempt" } }],
		},
		{
			name: "progress",
			title: "User Progress",
			type: "reference",
			to: { type: "progress" },
		},
	],
	preview: {
		select: {
			user: "user.firstName",
			lastName: "user.lastName",
		},
		prepare(selection) {
			return {
				title: `${selection.user} ${selection.lastName}'s Plan`,
			};
		},
	},
};
