import { styled } from "@mui/material/styles";
import { Divider, MenuItem } from "@mui/material";
import { priorityColors } from "../../../../constants/priority-constants";
import { ChevronRight, Flag, Input, Subject } from "@mui/icons-material";

export const TaskMenuItem = styled(MenuItem)({
  display: "flex",
  alignItems: "center",
  padding: "6px 12px",
  "&+.MuiDivider-root": {
    margin: "0",
  },
  "&:first-of-type": {
    padding: "2px 12px",
  },
});

export const PriorityContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const Text = styled("span")({
  fontSize: "12px",
  color: "rgba(25, 25, 25, .5)",
});

export const IconsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
});

export const FlagIcon = styled(Flag)(({ priority }) => ({
  color: priorityColors[priority],
}));

export const SplitDivider = styled(Divider)({});

export const InboxIcon = styled(Input)({
  fontSize: "14px",
  margin: "0 6px 0 0",
  color: "rgba(25, 25, 25, .5)",
});

export const InboxText = styled("p")({
  fontSize: "13px",
});

export const ChevronRightIcon = styled(ChevronRight)({
  fontSize: "18px",
  color: "rgba(25, 25, 25, .5)",
  marginLeft: "auto",
});

export const Span = styled("span")({
  fontWeight: "bold",
}); 

export const SubjectIcon = styled(Subject)({
  fontSize: "14px",
  margin: "0 6px 0 0",
  color: "rgba(25, 25, 25, .5)"
});

export const SubjectText = styled("p")({
  fontSize: "13px",
});
