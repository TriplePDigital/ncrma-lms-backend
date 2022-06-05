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
			name: "activities",
			title: "Activities",
			type: "array",
			of: [{ type: "reference", to: { type: "activity" } }],
		},
		{
			name: "quizAttempts",
			title: "Quiz Attempts",
			type: "array",
			of: [{ type: "reference", to: { type: "quizAttempt" } }],
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
