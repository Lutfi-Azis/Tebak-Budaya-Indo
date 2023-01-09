import { pool } from "./db";
import Question from "./types/Question";
import QuestionPackage from "./types/QuestionPackage";

export function getQuestionPackages(
  packageType: string
): Promise<QuestionPackage[]> {
  return new Promise((res, rej) => {
    pool.query(
      "SELECT `id`, `title`, `author`, `image_src`, `image_alt`, `description`" +
        " FROM `question_package` WHERE `gamemode` = ?",
      [packageType],
      (err, results) => {
        if (err) {
          rej(err);
          return;
        }
        const returnData = results.map((row: any) => ({
          id: row.id,
          title: row.title,
          author: row.author,
          imageSrc: row.image_src,
          imageAlt: row.image_alt,
          description: row.description,
        }));
        res(returnData);
      }
    );
  });
}

export function getQuestionsOfPackage(
  questionPackageId: number
): Promise<Question[]> {
  return new Promise((res, rej) => {
    pool.query(
      "SELECT `question`.*" +
        " FROM `question`" +
        " JOIN `question_package_relation`" +
        " ON `question`.`id` = `question_package_relation`.`question_id`" +
        " WHERE `question_package_relation`.`question_id` = ?",
      [questionPackageId],
      (err, results) => {
        if (err) {
          rej(err);
          return;
        }
        const returnData = results.map((row: any) => ({
          id: row.id,
          imageSrc: row.image_src,
          answer: row.answer,
        }));
        res(returnData);
      }
    );
  });
}

export function getQuestionPackage(id: number): Promise<QuestionPackage> {
  return new Promise((res, rej) => {
    pool.query(
      "SELECT *" + " FROM `question_package` WHERE `id` = ?",
      [id],
      (err, results) => {
        if (err) {
          rej(err);
          return;
        }
        const returnData = {
          id: results[0].id,
          title: results[0].title,
          author: results[0].author,
          imageSrc: results[0].image_src,
          imageAlt: results[0].image_alt,
          description: results[0].description,
        };
        res(returnData);
      }
    );
  });
}
