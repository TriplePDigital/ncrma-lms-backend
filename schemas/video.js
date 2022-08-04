import React from "react";

export default {
	name: "video",
	title: "Video",
	type: "document",
	fields: [
		{
			name: "instructor",
			title: "Instructor",
			type: "reference",
			required: true,
			to: [
				{
					type: "instructor",
				},
			],
		},
		{
			name: "vimeoVideo",
			title: "Vimeo Video",
			type: "vimeoVideo",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "body",
			title: "Body",
			type: "markdown",
			options: {
				minRows: 20,
			},
		},
	],
	preview: {
		select: {
			media: "vimeoVideo",
		},
		prepare({ media }) {
			return {
				title: media.oEmbedData.title,
				media: <img src={`${media.oEmbedData.thumbnail_url}`} />,
			};
		},
	},
};
