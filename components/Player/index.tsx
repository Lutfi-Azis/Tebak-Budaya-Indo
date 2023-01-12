import { Component } from "react";
import Question from "../../types/Question";
import Core from "./Core";
import EndScreen from "./EndScreen";
import Unstarted from "./Unstarted";

type Props = {
  questions: Question[];
  onStatusChange?: (status: Status) => void;
};

type State = {
  /**
   * Index of current questions.
   */
  index: number;
  answers: string[];
  status: Status;
};

export enum Status {
  Unstarted,
  Playing,
  Over,
}

class Player extends Component<Props, State> {
  state = {
    index: 0,
    answers: [],
    status: Status.Unstarted,
  };

  handleStartClick = () => {
    this.setState({ status: Status.Playing });
    this.props.onStatusChange?.(Status.Playing);
  };

  handleAnswer = (answer: string) => {
    this.setState({ answers: [...this.state.answers, answer] });
    if (this.state.index >= this.props.questions.length - 1) {
      this.setState({ status: Status.Over });
      this.props.onStatusChange?.(Status.Over);
    } else this.setState({ index: this.state.index + 1 });
  };

  handleReplay = () => {
    this.setState({ index: 0, answers: [], status: Status.Unstarted });
    this.props.onStatusChange?.(Status.Unstarted);
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
        return (
          <EndScreen
            answers={this.state.answers}
            questions={this.props.questions}
            onReplay={this.handleReplay}
          />
        );
    }
  }
}

export default Player;
