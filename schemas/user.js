import React from "react";

export default {
	name: "user",
	title: "User",
	type: "document",
	fields: [
		{
			name: "account_id",
			title: "Account ID",
			type: "string",
		},
		{
			name: "firstName",
			title: "First Name",
			type: "string",
		},
		{
			name: "lastName",
			title: "Last Name",
			type: "string",
		},
		{
			name: "email",
			title: "Email",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "url",
		},
		{
			name: "avatar",
			title: "Avatar",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "active",
			title: "Active",
			type: "boolean",
			initialValue: false,
		},
		{
			// this is only if you use credentials provider
			// TODO: implement email password authentication
			name: "password",
			type: "string",
			hidden: true,
		},
		{
			name: "plan",
			title: "Plan",
			type: "reference",
			to: { type: "plan" },
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
			],
		},
		//TODO: implement a way to track the user's login history
		{
			name: "lastLogin",
			title: "Last Login",
			type: "datetime",
			readOnly: true,
		},
	],
	preview: {
		select: {
			title: "firstName",
			subtitle: "lastName",
			media: "avatar",
			email: "email",
		},
		prepare({ title, subtitle, media, email }) {
			return {
				title: `${title} ${subtitle}`,
				subtitle: email,
				media,
			};
		},
	},
};
