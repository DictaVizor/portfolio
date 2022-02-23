import { Box, Typography } from "@mui/material";
import { ProjectList } from "../ProjectList";

export const ProjectSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography component="h2" variant="h1" fontWeight="medium" gutterBottom>
        Projects
      </Typography>
      <ProjectList
        projects={[
          {
            title: "Portfolio",
            description:
              "Space theme portfolio. You can take a look at the code of this website on github!",
            livePreviewUrl: "#",
            githubUrl:
              "https://github.com/DictaVizor/portfolio/tree/main/apps/portfolio",
            imageUrl: "/portfolio_preview.png",
            isSameDomain: true,
          },
        ]}
      />
    </Box>
  );
};
