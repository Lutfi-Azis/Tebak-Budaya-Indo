import NextHead from "next/head";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

const Head: FC<Props> = (props) => {
  return (
    <NextHead>
      <title>{props.title || "Tebak Budaya"}</title>
      {props.description && (
        <meta name="description" content={props.description} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {props.children}
    </NextHead>
  );
};

export default Head;
