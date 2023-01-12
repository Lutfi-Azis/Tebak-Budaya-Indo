import NextHead from "next/head";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

const Head: FC<Props> = (props) => {
  if (props.title) var title = props.title + " - Tebak Budaya";
  else var title = "Tebak Budaya";
  return (
    <NextHead>
      <title>{title}</title>
      {props.description && (
        <meta name="description" content={props.description} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={process.env.NEXT_PUBLIC_HOST + "/favicon.ico"} />
      {props.children}
    </NextHead>
  );
};

export default Head;
