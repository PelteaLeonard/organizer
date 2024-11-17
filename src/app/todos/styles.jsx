import CheckBoxMui from "@mui/material/Checkbox";
import {
  DateRange,
  ExpandMore,
  MenuOpen,
  MoreHoriz,
  SwapVert,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  flex: "1",
  color: "#f2f5fe",
  padding: "16px 16px",
  borderLeft: "1px solid rgba(0,0,0,.3)",
  borderRight: "1px solid rgba(0,0,0,.3)",
});

export const ActionsContainer = styled("div")({
  display: "flex",
  height: "40px",
  justifyContent: "space-between",
});

export const ActionsLeftContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const MenuOpenIconButton = styled(IconButton)({});

export const MenuOpenIcon = styled(MenuOpen)({
  color: "#696969",
  opacity: ".7",
  ":hover": {
    cursor: "pointer",
    opacity: "1",
  },
});

export const Title = styled("h5")({
  fontSize: "24px",
  color: "#191919",
});

export const ActionsRightContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  color: "#696969",
});

export const SwapVertIconButton = styled(IconButton)({});

export const SwapVertIcon = styled(SwapVert)({
  color: "#696969",
  opacity: ".7",
  ":hover": {
    cursor: "pointer",
    opacity: "1",
  },
});

export const MoreHorizIconButton = styled(IconButton)({});

export const MoreHorizIcon = styled(MoreHoriz)({
  color: "#696969",
  opacity: ".7",
  ":hover": {
    cursor: "pointer",
    opacity: "1",
  },
});

export const InputFieldWrapper = styled("div")({});

export const DateRangeIconButton = styled(IconButton)({
  padding: "8px",
});

export const DateRangeIcon = styled(DateRange)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const TasksList = styled("ul")({});

export const TaskItem = styled("li")({
  borderBottom: "1px solid rgba(25, 25, 25, 0.1)",
  padding: "4px 0",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "rgba(25, 25, 25, .05)",
  },
});

export const CheckBox = styled(CheckBoxMui)({
  color: "rgba(25, 25, 25, .4)",
  padding: "6px",
});

export const Text = styled("span")({
  color: "rgba(25, 25, 25, .8)",
  fontSize: "14px",
});

export const CompletedContainer = styled("div")({
  display: "flex",
  color: "#191919CC",
});

export const TopContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  gap: "4px",
});

export const CompletedText = styled("span")({});

export const CompletedNumber = styled("span")({});

export const ExpandMoreIcon = styled(ExpandMore)({
  fontSize: "16px",
});
