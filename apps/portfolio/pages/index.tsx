import {
  StarsBackground,
  Planet,
  PresentationPlanet,
  SkillsGalaxy,
} from "@/src/components";
import { ContactPlanet } from "@/src/components/ContactPlanet";
import { Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Container maxWidth={false} sx={{ overflow: "hidden" }}>
      <Head>
        <title>Victor Diaz - Full Stack Developer</title>
        <meta name="description" content="victor diaz portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarsBackground />
      <PresentationPlanet />
      <SkillsGalaxy />
      <ContactPlanet />
    </Container>
  );
};

export default Home;
