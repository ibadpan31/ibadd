import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RowRiwayat from "./components/RowRiwayat";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./ibad-styles.css";
import FavColor from "./components/favColor";
import ContactForm from './components/ContactForm';

export default function Gallery() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <FavColor/>
      <ContactForm />
    </section>
  );
}

