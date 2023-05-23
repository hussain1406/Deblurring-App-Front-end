import Hero from "../assets/Hero";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Image Debluring App</title>
      </Helmet>
      <Hero />
    </>
  );
}
