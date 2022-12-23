import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../db";
import QuestionPackage from "../../../types/QuestionPackage";

type Data = QuestionPackage[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const questionPackageType = req.query.type as string;
  res.json(await getQuestionPackages(questionPackageType));
}

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
