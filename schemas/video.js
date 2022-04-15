import React from "react";

export default {
	name: "video",
	title: "Video",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "body",
			title: "Body",
			type: "markdown",
			options: {
				minRows: 20,
			},
		},
		{
			name: "course",
			title: "Course",
			type: "reference",
			to: [
				{
					type: "mission",
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
			name: "instructor",
			title: "Instructor",
			type: "reference",
			to: [
				{
					type: "instructor",
				},
			],
		},
		{
			name: "duration",
			title: "Estimate duration in minutes",
			type: "number",
			validation: (num) => num.min(0),
		},
	],

	// preview: {
	// 	select: {
	// 		title: "title",
	// 		slug: "slug",
	// 		vimeoVideo: "vimeoVideo",
	// 		media: "vimeoVideo",
	// 	},
	// 	prepare(selection) {
	// 		let oEmbedData = selection.vimeoVideo
	// 			? selection.vimeoVideo.oEmbedData
	// 			: {};

	// 		return {
	// 			title: selection.title || oEmbedData.title,
	// 			media: oEmbedData.thumbnail_url,
	// 			slug: selection.slug,
	// 		};
	// 	},
	// },
	preview: {
		select: {
			title: "title",
			media: "vimeoVideo",
		},
		prepare({ title, media }) {
			return {
				title,
				media: <img src={`${media.oEmbedData.thumbnail_url}`} />,
			};
		},
	},
};
