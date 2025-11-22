import DoctorList from "./_components/Doctor/DoctorList";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SearchCategory from "./_components/Category/SearchCategory";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchCategory />
      <DoctorList />
      <Footer />
    </div>
  );
}
