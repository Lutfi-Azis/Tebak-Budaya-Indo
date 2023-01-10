import { Component } from "react";
import Question from "../../types/Question";
import Core from "./Core";
import Unstarted from "./Unstarted";

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

  handleStartClick = () => {
    this.setState({ status: Status.Playing });
  };

  handleAnswer = (answer: string) => {
    this.setState({ answers: [...this.state.answers, answer] });
    if (this.state.index >= this.props.questions.length - 1)
      this.setState({ status: Status.Over });
    else this.setState({ index: this.state.index + 1 });
  };

  render() {
    switch (this.state.status) {
      case Status.Unstarted:
        return <Unstarted onStart={this.handleStartClick} />;
      case Status.Playing:
        return (
          <Core
            onAnswer={this.handleAnswer}
            question={this.props.questions[this.state.index]}
          />
        );
      default:
        return <>Over</>;
    }
  }
}

export default Player;
