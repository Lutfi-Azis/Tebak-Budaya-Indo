import { Box, Button, Image, VStack } from "@chakra-ui/react";
import { Component } from "react";
import Question from "../types/Question";
import Description from "./Description";

type Props = {
  questions: Question[];
  onFinish?: (result: Result) => void;
};

type State = {
  /**
   * Index of current questions.
   */
  index: number;
  answers: string[];
  status: Status;
};

enum Status {
  Unstarted,
  Playing,
  Over,
}

type Result = {};

class Player extends Component<Props, State> {
  state = {
    index: 0,
    answers: [],
    status: Status.Unstarted,
  };
  constructor(props: Props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  handleStartClick() {
    this.setState({ status: Status.Playing });
  }

  render() {
    let content: JSX.Element;
    switch (this.state.status) {
      case Status.Unstarted:
        content = (
          <VStack textAlign="center" spacing={8}>
            <Description height="auto" fontSize="3xl">
              Tekan tombol untuk memulai!
            </Description>
            <Button size="lg" onClick={this.handleStartClick}>
              MULAI
            </Button>
          </VStack>
        );
        break;
      case Status.Playing:
        content = (
          <Box width="100%" height="100vh">
            <Image
              src={
                process.env.NEXT_PUBLIC_HOST +
                this.props.questions[this.state.index].imageSrc
              }
              alt={"Gambar nomor " + (this.state.index + 1)}
              maxHeight="80%"
            />
            <Button size="lg">JAWAB</Button>
          </Box>
        );
        break;
      case Status.Over:
        content = <>Over</>;
        break;
    }

    const flexProps =
      this.state.status !== Status.Playing
        ? {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }
        : {};
    return (
      <Box height="100%" width="100%" {...flexProps}>
        {content}
      </Box>
    );
  }
}

export default Player;
