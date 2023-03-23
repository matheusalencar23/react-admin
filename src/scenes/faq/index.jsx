import {
  Box,
  useTheme,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Question = ({ title, defaultExpanded }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius
          varius arcu, eu dictum arcu blandit nec. Quisque id sapien id massa
          blandit scelerisque. Aenean in tincidunt eros. Praesent pellentesque
          felis ligula, sed tincidunt elit semper eu. Sed ipsum elit, sodales
          nec tempor a, scelerisque eget leo.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const FAQ = () => {
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page" />
      <Question title="An important question" defaultExpanded />
      <Question title="Another important question" />
      <Question title="Your favorite question" />
      <Question title="Some random question" />
      <Question title="The final question" />
    </Box>
  );
};

export default FAQ;
