'use strict';
function selectQuestions(
  result,
  questions_type,
  examination_type,
  course_types
) {
  if (
    questions_type.length &&
		examination_type.length &&
		course_types.length
  ) {
    for (let i = 0; i < result.length; i++) {
      result[i] = Object.assign(result[i], {
        questions_type: questions_type[i].subject_text,
        examination_type: examination_type[i].exam_types,
        course_types: course_types[i].classification,
      });
    }
  }
  return result;
}

module.exports = selectQuestions;
