import S from "@sanity/desk-tool/structure-builder";

export default () =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Academy")
				.child(
					S.list()
						.title("Course Groups")
						.items([
							S.listItem()
								.title("Course Tracks")
								.child(S.documentTypeList("track").title("Course Tracks")),
							S.listItem()
								.title("Courses")
								.child(S.documentTypeList("mission").title("Courses")),
							S.listItem()
								.title("Course Contents")
								.child(
									S.documentTypeList("mission")
										.title("Courses")
										.child((stageID) =>
											S.documentTypeList("stage")
												.title("Stages")
												.filter('_type == "stage" && references($stageID)')
												.params({ stageID })
												.child((checkpointID) =>
													S.documentTypeList("checkpoint")
														.title("Videos")
														.filter(
															'_type == "checkpoint" && references($checkpointID)'
														)
														.params({ checkpointID })
												)
										)
								),
							S.listItem()
								.title("Course Chapters")
								.child(
									S.documentTypeList("mission")
										.title("Courses")
										.child((stageID) =>
											S.documentTypeList("stage")
												.title("Stages")
												.filter('_type == "stage" && references($stageID)')
												.params({ stageID })
										)
								),
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
							S.listItem()
								.title("Course by Instructor")
								.child(
									S.documentTypeList("instructor")
										.title("Instructors")
										.child((instructorId) =>
											S.documentTypeList("video")
												.title("Courses taught by instructor")
												.filter(
													'_type == "mission" && references($instructorId)'
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
				.title("Quiz and Questions")
				.child(
					S.documentTypeList("quiz")
						.title("Quiz")
						.child(
							(quizID) =>
								S.documentTypeList("question").title("Questions by Quiz")
							// .filter('_type == "question" && references($quizID)')
							// .params({ quizID })
						)
				),
			S.divider(),
			...S.documentTypeListItems().filter((item) => {
				const { name } = item.getSchemaType();
				console.log(name);
				return (
					name === "certification" ||
					name === "quizAttempt" ||
					name === "progress" ||
					name === "webinar" ||
					name === "quiz"
				);
			}),
		])
		.showIcons(true);
