import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySearch />
      <DoctorList />
    </>
  );
}
