import S from "@sanity/desk-tool/structure-builder";

export default () =>
	S.list()
		.title("Content")
		.items([
			// Make a new list item
			S.listItem()
				// Give it a title
				.title("Academy")
				.child(
					// Make a list in the second pane called Portfolio
					S.list()
						.title("Course Groups")
						.items([
							// Add the first list item
							S.listItem()
								.title("Course Tracks")
								.child(S.documentTypeList("track").title("Course Tracks")),
							// Add a second list item
							S.listItem()
								.title("Courses")
								.child(
									S.documentTypeList("mission")
										.title("Courses")
										.child((missionId) =>
											S.documentList()
												.title("Videos in Course")
												.filter('_type == "video" && course._ref == $missionId')
												.params({ missionId })
										)
								),
							// Need to group chapters based on missions
							S.listItem()
								.title("Chapters")
								.child(S.documentTypeList("stage").title("All Chapters")),
							// Need to group quizzes based on missions
							S.listItem()
								.title("Quizzes")
								.child(S.documentTypeList("checkpoint").title("All Quizzes")),
						])
				),
			S.listItem()
				.title("Instructors")
				.child(
					S.list()
						.title("Instructor Groups")
						.items([
							S.listItem()
								.title("All Instructors")
								.child(S.documentTypeList("instructor").title("Instructors")),
							S.listItem()
								.title("Videos by Instructor")
								.child(
									S.documentTypeList("instructor")
										.title("Instructors")
										.child((instructorId) =>
											S.documentTypeList("video")
												.title("Videos by Instructor")
												.filter(
													'_type == "video" && instructor._ref == $instructorId'
												)
												.params({ instructorId })
										)
								),
						])
				),
			S.listItem()
				.title("Students")
				.child(S.documentTypeList("user").title("Students")),
			S.listItem()
				.title("Webinars")
				.child(S.documentTypeList("webinar").title("Webinars")),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getSchemaType() !== "users" ||
					item.getSchemaType() !== "webinars" ||
					item.getSchemaType() !== "certifications" ||
					item.getId() !== "certifications" ||
					item.getTitle() !== "Certifications"
			),
		])
		.showIcons(true);
