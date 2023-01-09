import { format } from "mysql";
import Question from "../types/Question";
import QuestionPackage from "../types/QuestionPackage";
import { get, runQuery } from "./utils";

export async function getQuestionPackages(
  gamemode: string
): Promise<QuestionPackage[]> {
  return get({ table: "question_package", where: { gamemode: gamemode } });
}

export async function getQuestionsOfPackage(
  questionPackageId: number
): Promise<Question[]> {
  const results = await runQuery(
    format(
      "SELECT `question`.*" +
        " FROM `question`" +
        " JOIN `question_package_relation`" +
        " ON `question`.`id` = `question_package_relation`.`question_id`" +
        " WHERE `question_package_relation`.`question_id` = ?",
      [questionPackageId]
    )
  );

  return results.map((row: any) => ({
    id: row.id,
    imageSrc: row.image_src,
    answer: row.answer,
  }));
}

export async function getQuestionPackage(id: number): Promise<QuestionPackage> {
  return (
    await get<QuestionPackage>({ table: "question_package", where: { id: id } })
  )[0];
}
