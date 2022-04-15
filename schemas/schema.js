// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import certification from "./certification";
import mission from "./mission";
import stage from "./stage";
import video from "./video";
import checkpoint from "./checkpoint";
import question from "./question";
import answer from "./answer";
import instructor from "./instructor";
import explorer from "./explorer";
import account from "./account";
import verificationRequest from "./verification-req";
import user from "./user";
import webinar from "./webinar";
import track from "./track";
import plan from "./plan";
import quizAttempt from "./quizAttempt";
import quiz from "./quiz";
import progress from "./progress";
import activity from "./activity";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: "default",
	types: schemaTypes.concat([
		certification,
		mission,
		stage,
		video,
		instructor,
		checkpoint,
		question,
		// explorer,
		answer,
		// account,
		user,
		// verificationRequest,
		webinar,
		track,
		plan,
		quiz,
		quizAttempt,
		progress,
		activity,
	]),
});
