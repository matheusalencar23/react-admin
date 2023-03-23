import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subtitle="Simple geography chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="5px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
