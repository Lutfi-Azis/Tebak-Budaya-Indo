import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  useToken,
  Tag,
  TagLeftIcon,
  TagLabel,
  chakra,
} from "@chakra-ui/react";
import { FC } from "react";
import Question from "../../types/Question";
import { toTitleCase } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ReviewCard.module.css";

type Props = { index: number; question: Question; answer: string };

const ReviewCard: FC<Props> = (props) => {
  const isCorrect = props.question.answer === props.answer;
  const [border, heading] = useToken("colors", [
    isCorrect ? "green.300" : "red.300",
    isCorrect ? "green.800" : "red.800",
  ]);
  const stylizedUserAnswer = toTitleCase(props.answer.replaceAll("-", " "));
  const stylizedCorrectAnswer = toTitleCase(
    props.question.answer.replaceAll("-", " ")
  );
  const Icon = chakra(FontAwesomeIcon);

  return (
    <Card borderColor={border} borderWidth={3}>
      <CardBody padding={0}>
        <Image
          src={process.env.NEXT_PUBLIC_HOST + props.question.imageSrc}
          alt={`Gambar di ${stylizedCorrectAnswer}`}
        />
      </CardBody>
      <Tag colorScheme="gray" size="lg">
        <TagLeftIcon>
          <Icon icon={faClipboardList} />
        </TagLeftIcon>
        <TagLabel>{stylizedCorrectAnswer}</TagLabel>
      </Tag>
      <CardFooter>
        <Heading color={heading} size="lg">
          {props.index + 1}. {stylizedUserAnswer}
        </Heading>
      </CardFooter>
      <Icon
        bgColor={border}
        color={heading}
        className={styles.reviewBadge}
        icon={isCorrect ? faCheck : faXmark}
      />
    </Card>
  );
};

export default ReviewCard;
