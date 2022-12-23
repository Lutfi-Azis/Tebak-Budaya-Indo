import { GetStaticPaths, GetStaticProps } from "next";
import Head from "../../../../components/Head";
import Header from "../../../../components/Header";
import PackageSelection from "../../../../components/PackageSelection";
import { getQuestionPackages } from "../../../../controllers";
import QuestionPackage from "../../../../types/QuestionPackage";

type Props = { packages?: QuestionPackage[] };

export default function PackageSelectionPage(props: Props) {
  return (
    <>
      <Head
        title="Pemilihan Paket"
        description="Pemilihan paket pertanyaan Tebak Wilayah"
      />
      <Header />
      <PackageSelection packages={props.packages || []} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      packages: await getQuestionPackages(context.params?.type as string),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { type: "area" },
      },
    ],
    fallback: false,
  };
};
