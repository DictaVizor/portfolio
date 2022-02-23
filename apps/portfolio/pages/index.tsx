import {
  StarsBackground,
  PresentationPlanet,
  SkillsGalaxy,
  AppBar,
  ContactPlanet,
  ProjectSection,
} from "@/src/components";
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
      <AppBar />
      <StarsBackground />
      <PresentationPlanet />
      <SkillsGalaxy />
      <ProjectSection />
      <ContactPlanet />
    </Container>
  );
};

export default Home;
