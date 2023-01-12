import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import ButtonLink from "../../components/ButtonLink";
import FormPage from "../../components/FormPage";
import Head from "../../components/Head";
import Header from "../../components/Header";

type Props = {
  id: number;
};

export default function Dashboard(props: Props) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const id = router.query.id as string;
  return (
    <>
      <Header />
      <Head
        title={"Dashboard Turnamen"}
        description={"Halaman utama penyelenggara turnamen"}
      />
      <FormPage>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Bagikan URL Lomba</FormLabel>
            <Input
              value={process.env.NEXT_PUBLIC_HOST + "/tournament/" + id}
              readOnly
            />
          </FormControl>
          <Button onClick={onOpen} size="lg" width="100%">
            Mulai Lomba
          </Button>
        </Stack>
      </FormPage>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Status Pembangunan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Mohon maaf, tetapi fitur perlombaan belum tersedia. Dikarenakan
            situs Tebak Budaya masih dalam tahap pembangunan, dan belum selesai.
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Tutup
            </Button>
            <ButtonLink
              href={process.env.NEXT_PUBLIC_HOST}
              leftIcon={<FaHome />}
              variant="ghost"
            >
              Halaman Utama
            </ButtonLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
