import { pool } from "./db";
import QuestionPackage from "./types/QuestionPackage";

export function getQuestionPackages(
  packageType: string
): Promise<QuestionPackage[]> {
  return new Promise((res, rej) => {
    pool.query(
      "SELECT `title`, `author`, `image_src`, `image_alt`, `description`" +
        " FROM `question_package` WHERE `gamemode` = ?",
      [packageType],
      (err, results) => {
        if (err) {
          rej(err);
          return;
        }
        const returnData = results.map((row: any) => ({
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
