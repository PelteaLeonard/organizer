import CheckboxMui from "@mui/material/Checkbox";
import { CalendarToday, Flag } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Button, Divider, IconButton } from "@mui/material";

export const MainContainer = styled("div")({
  flex: "0 0 33.3%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px 16px",
});

export const ActionsContainer = styled("div")({
  display: "flex",
  height: "40px",
  alignItems: "center",
  width: "100%",
});

export const Checkbox = styled(CheckboxMui)({
  padding: "4px",
});

export const InputDivider = styled(Divider)({
  marginLeft: "4px",
  height: "16px",
  backgroundColor: "rgba(25, 25, 25, .3)",
  width: "1px",
});

export const CalendarTodayIcon = styled(CalendarToday)({});

export const DateButton = styled(Button)({
  marginLeft: "10px",
  border: "0",
  textTransform: "none",
  ":hover": {
    border: "0",
  },
});

export const DateInput = styled("input")({
  border: "0",
  marginLeft: "6px",
  outline: "none",
  padding: "4px",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "rgba(25, 25, 25, .05)",
  },
});

export const FlagIconButton = styled(IconButton)({
  marginLeft: "auto",
});

export const FlagIcon = styled(Flag)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});
