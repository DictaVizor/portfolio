import { ProjectCard } from "../ProjectCard";
import { ProjectListProps } from "./types";
import { Fragment, useMemo } from "react";
import { Grid, Box } from "@mui/material";
import { ProjectType } from "@/src/types";
import { motion, useAnimation, Variants } from "framer-motion";

const variants: Variants = {
  float: {
    transform: "translate(8px, -20px)",
    transition: {
      repeat: Infinity,
      duration: 3,
      repeatType: "mirror",
      type: "tween",
    },
  },
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const groupedProjects = useMemo(() => {
    return projects.reduce<Array<Array<ProjectType>>>(
      (acumulator, currentValue, currentIndex, array) => {
        if (currentIndex % 2 === 0)
          acumulator.push(array.slice(currentIndex, currentIndex + 2));
        return acumulator;
      },
      []
    );
  }, [projects]);

  return (
    <Grid
      container
      spacing={8}
      component={motion.div}
      variants={variants}
      animate="float"
    >
      {groupedProjects.map((group, groupIndex) => (
        <Grid
          item
          container
          key={groupIndex}
          xs={12}
          justifyContent="space-around"
          spacing={8}
          sx={{
            "& > :nth-of-type(2n)": {
              pt: {
                md: 16,
              },
            },
          }}
        >
          {group.map((project, projectIndex) => {
            return (
              <Grid item key={projectIndex} xs={12} sm={8} md={6} lg={5} xl={4}>
                <ProjectCard project={project} />
              </Grid>
            );
          })}
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
