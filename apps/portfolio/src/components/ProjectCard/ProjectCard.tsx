import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Stack,
  SvgIcon,
} from "@mui/material";
import { ProjectCardProps } from "./types";
import { Link } from "@portfolio/common";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";

export const ProjectCard = ({
  project: {
    title,
    description,
    livePreviewUrl,
    githubUrl,
    imageUrl,
    isSameDomain,
  },
}: ProjectCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        border: 1,
      }}
      elevation={0}
    >
      <CardMedia src={imageUrl} component="img" height="280" alt={title} />
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: "medium" }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography component="p" variant="body1">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 4, px: 4 }}>
        <Button
          variant="contained"
          href={livePreviewUrl}
          LinkComponent={Link}
          startIcon={<SvgIcon inheritViewBox component={BsFillEyeFill} />}
          target={!isSameDomain ? "_blank" : undefined}
        >
          live preview
        </Button>
        <Button
          variant="contained"
          href={githubUrl}
          LinkComponent={Link}
          startIcon={<SvgIcon inheritViewBox component={BsGithub} />}
          target="_blank"
        >
          code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
