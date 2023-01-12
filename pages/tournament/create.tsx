import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import ButtonLink from "../../components/ButtonLink";
import FormPage from "../../components/FormPage";
import Head from "../../components/Head";
import Header from "../../components/Header";

export default function CreateTournament() {
  return (
    <>
      <Head
        title="Buat Turnamen"
        description="Pembuatan turnamen Tebak Budaya"
      />
      <Header />
      <FormPage
        heading="Buat Perlombaan"
        caption="yang penuh ilmu dan kemeriahan"
      >
        <form>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Nama Lomba</FormLabel>
              <Input type="text" placeholder="Nama Lomba" required />
            </FormControl>
            <FormControl>
              <FormLabel>Kata Sandi</FormLabel>
              <Input type="password" />
              <FormHelperText>
                Kata sandi yang perlu dimasukkan peserta lomba. Kosongkan jika
                tidak diperlukan.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Mode Permainan</FormLabel>
              <Select placeholder="Select option" defaultValue="mixed">
                <option value="mixed">Campur</option>
                <option value="area">Wilayah</option>
                <option value="clothing">Baju Adat</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Jumlah Babak</FormLabel>
              <NumberInput defaultValue={3} min={1} max={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Jumlah Soal per Babak</FormLabel>
              <NumberInput defaultValue={8} min={1} max={16}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Waktu per Soal (detik)</FormLabel>
              <NumberInput defaultValue={12} min={10} max={120}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Waktu Istirahat Antar Babak (detik)</FormLabel>
              <NumberInput defaultValue={60} min={10} max={1200}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Jumlah Bantuan Petunjuk</FormLabel>
              <NumberInput defaultValue={2} min={0} max={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText>
                Jumlah bantuan petunjuk yang dapat dipakai peserta selama
                perlombaan.
              </FormHelperText>
            </FormControl>
            <ButtonLink
              href={"./" + Math.floor(Math.random() * 10 ** 8)}
              size="lg"
              width="100%"
            >
              Buat Lomba
            </ButtonLink>
          </Stack>
        </form>
      </FormPage>
    </>
  );
}
