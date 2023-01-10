import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "../../../components/Head";
import Player from "../../../components/Player";
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
    <Box display="flex" flexFlow="column" height="100%">
      <Head
        title={props.package.title}
        description={props.package.description}
      />
      <Box flex="1 1 auto">
        <Player questions={props.questions} />
      </Box>
    </Box>
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
