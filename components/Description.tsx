import { FC, PropsWithChildren } from "react";
import { Text, useToken } from "@chakra-ui/react";

type Props = PropsWithChildren<{}>;

const Description: FC<Props> = (props) => {
  const [primary600] = useToken("colors", ["primary.600"]);
  return (
    <div style={{ height: 100 }}>
      <Text color={primary600} fontSize="xl">
        {props.children}
      </Text>
    </div>
  );
};

export default Description;
