import { Heading, useToken, Wrap, WrapItem } from "@chakra-ui/react";
import { FC } from "react";
import QuestionPackage from "../types/QuestionPackage";
import Package from "./Package";

type Props = {
  packages: QuestionPackage[];
};

const PackageSelection: FC<Props> = (props) => {
  const [heading] = useToken("colors", ["primary.600"]);
  return (
    <>
      <Heading pl={10} pb={8} color={heading}>
        Pemilihan Paket Soal
      </Heading>
      <Wrap justify="center" pb={2}>
        {props.packages.map((p) => (
          <WrapItem key={p.id}>
            <Package {...p} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default PackageSelection;
