import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  IconButton,
  useFocusEffect,
  useToken,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Stars from "./Stars";
import styles from "./ReviewCarousel.module.css";

type Props = { reviews: Review[]; autoplay?: boolean };

const ReviewCarousel: FC<Props> = ({ reviews, autoplay = false }) => {
  const [border] = useToken("colors", ["primary.600"]);
  const [index, setIndex] = useState(0);
  const back = () =>
    index > 0 ? setIndex(index - 1) : setIndex(reviews.length - 1);
  const next = () =>
    index < reviews.length - 1 ? setIndex(index + 1) : setIndex(0);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <Card
      textAlign="center"
      shadow="lg"
      h={280}
      borderColor={border}
      borderWidth={2}
    >
      <CardHeader paddingBottom={0}>
        <Heading>{reviews[index].author}</Heading>
      </CardHeader>
      <CardBody>
        <Stars value={reviews[index].rating} />
        <Text>{reviews[index].comment}</Text>
      </CardBody>
      <IconButton
        colorScheme="secondary"
        className={`${styles.nav} ${styles.back}`}
        aria-label="Go to previous review"
        icon={<FaAngleLeft />}
        onClick={back}
      />
      <IconButton
        colorScheme="secondary"
        className={`${styles.nav} ${styles.next}`}
        aria-label="Go to next review"
        icon={<FaAngleRight />}
        onClick={next}
      />
    </Card>
  );
};

export default ReviewCarousel;

export type Review = {
  author: string;
  rating: number;
  comment?: string;
  affiliation?: string;
};
