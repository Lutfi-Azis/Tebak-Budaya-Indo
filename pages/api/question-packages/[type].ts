import type { NextApiRequest, NextApiResponse } from "next";
import { getQuestionPackages } from "../../../controllers";
import QuestionPackage from "../../../types/QuestionPackage";

type Data = QuestionPackage[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const questionPackageType = req.query.type as string;
  res.json(await getQuestionPackages(questionPackageType));
}
