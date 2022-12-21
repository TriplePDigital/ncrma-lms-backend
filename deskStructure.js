import S from "@sanity/desk-tool/structure-builder";
import { createSuperPane } from "sanity-super-pane";
// import { ReferencedByView } from "part:@indent-oss/sanityio-referenced-by";

// export const getDefaultDocumentNode = () => {
// 	return S.document().views([
// 		S.view.form(),
// 		S.view.component(ReferencedByView).title("Referenced by"),
// 	]);
// };

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
								.title("Course Chapters")
								.child(
									S.documentTypeList("mission")
										.title("Courses")
										.child((stageID) =>
											S.documentTypeList("stage")
												.title("Chapters")
												.defaultOrdering([{ field: "order", direction: "asc" }])
												.filter('_type == "stage" && references($stageID)')
												.params({ stageID })
										)
								),
							S.listItem()
								.title("Course Contents")
								.child(
									S.documentTypeList("mission")
										.title("Courses")
										.child((stageID) =>
											S.documentTypeList("stage")
												.title("Chapters")
												.defaultOrdering([{ field: "order", direction: "asc" }])
												.filter('_type == "stage" && references($stageID)')
												.params({ stageID })
												.child((checkpointID) =>
													S.documentTypeList("checkpoint")
														.title("Videos and Quizzes")
														.filter(
															'_type == "checkpoint" && references($checkpointID)'
														)
														.params({ checkpointID })
														.defaultOrdering([
															{ field: "order", direction: "desc" },
															{ field: "_createdAt", direction: "desc" },
														])
												)
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
				.title("Accounts")
				.child(
					S.list()
						.title("Account Groups")
						.items([
							S.listItem()
								.title("Risk Managers")
								.child(
									S.documentTypeList("user")
										.title("Risk Managers")
										.filter('_type == "user" && role == "riskManager"')
								),
							S.listItem()
								.title("Students")
								.child(
									S.documentTypeList("user")
										.title("Students")
										.filter(
											'_type == "user" && role == "student" || role == null'
										)
								),
							// S.listItem()
							// 	.title("Administrators")
							// 	.child(
							// 		S.documentTypeList("user")
							// 			.title("Administrators")
							// 			.filter('_type == "user" && role == "admin"')
							// 	),
						])
				),
			S.listItem()
				.title("Enrollments by User")
				.child(
					S.documentTypeList("user")
						.title("Users")
						.child((userID) =>
							S.documentTypeList("enrollment")
								.title("Enrollments for User")
								.filter('_type == "enrollment" && references($userID)')
								.params({ userID })
						)
				),
			S.listItem()
				.title("Progress by User and Enrollment")
				.child(
					S.documentTypeList("user")
						.title("Users")
						.child((userID) =>
							S.documentTypeList("enrollment")
								.title("Enrollments for User")
								.filter('_type == "enrollment" && references($userID)')
								.params({ userID })
								.child((enrollmentID) =>
									S.documentTypeList("progress")
										.title("Progress for Enrollment")
										.filter('_type == "progress" && references($enrollmentID)')
										.params({ enrollmentID })
										.initialValueTemplates([
											S.initialValueTemplateItem("progress-by-enrollment", {
												enrollmentID,
												userID,
											}),
										])
								)
						)
				),
			S.listItem()
				.title("Quiz Attempts by User")
				.child(
					S.documentTypeList("user")
						.title("Users")
						.child((userID) =>
							S.documentTypeList("quizAttempt")
								.title("Quiz Attempts for User")
								.filter('_type == "quizAttempt" && references($userID)')
								.params({ userID })
						)
				),
			S.divider(),
			S.listItem()
				.title("Bulk Action Questions")
				.child(createSuperPane("question", S)),
			S.listItem()
				.title("Bulk Action Quizzes")
				.child(createSuperPane("quiz", S)),
			S.divider(),
			...S.documentTypeListItems().filter((item) => {
				const { name } = item.getSchemaType();
				return (
					name === "certification" ||
					name === "quizAttempt" ||
					name === "progress" ||
					name === "webinar" ||
					name === "enrollment" ||
					name === "riskManagerProfile" ||
					name === "facility" ||
					name === "company" ||
					name === "marketing" ||
					name === "membership"
				);
			}),
		])
		.showIcons(true);
