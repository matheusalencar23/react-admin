import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutline,
  CalendarTodayOutlined,
  HelpOutline,
  BarChartOutlined,
  PieChartOutlineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { tokens } from "../../theme";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <ProSidebar
      rootStyles={{
        border: "none",
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.primary[400],
        },
      }}
    >
      <Menu
        rootStyles={{
          [`.${menuClasses.icon}`]: {
            color: colors.gray[100],
          },
          [`.${menuClasses.icon}:hover`]: {
            color: "#868dfb",
          },
          [`.${menuClasses.button}`]: {
            padding: "5px 35px 5px 20px",
          },
          [`.${menuClasses.button}:hover`]: {
            color: "#868dfb",
            background: "transparent",
          },
          [`.${menuClasses.active}`]: {
            color: "#6870fa",
          },
        }}
      >
        <MenuItem
          onClick={() => collapseSidebar(!collapsed)}
          icon={collapsed ? <MenuOutlined /> : undefined}
          style={{ margin: "10px 0 20px 0" }}
        >
          {!collapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.gray[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => collapseSidebar(!collapsed)}>
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
