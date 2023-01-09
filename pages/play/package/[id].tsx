import { GetStaticPaths, GetStaticProps } from "next";
import Head from "../../../components/Head";
import Header from "../../../components/Header";
import {
  getQuestionPackage,
  getQuestionPackages,
  getQuestionsOfPackage,
} from "../../../models";
import Question from "../../../types/Question";
import QuestionPackage from "../../../types/QuestionPackage";

type Props = {
  package: QuestionPackage;
  questions: Question[];
};

export default function PlayingPage(props: Props) {
  return (
    <>
      <Head
        title={props.package.title}
        description={props.package.description}
      />
      <Header />
      {props.questions.map((q) => (
        <p key={q.id}>{q.imageSrc}</p>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      package: await getQuestionPackage(parseInt(context.params!.id as string)),
      questions: await getQuestionsOfPackage(
        parseInt(context.params!.id as string)
      ),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getQuestionPackages("area")).map((p) => ({
      params: { id: p.id.toString() },
    })),
    fallback: false,
  };
};
