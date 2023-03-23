import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              bgcolor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails sent"
            progress="0.75"
            increase="+14%"
            icon={
              <Email
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          ></StatBox>
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="341,225"
            subtitle="Sales obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSale
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          ></StatBox>
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          ></StatBox>
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic inbound"
            progress="0.8"
            increase="+43%"
            icon={
              <Traffic
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          ></StatBox>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
