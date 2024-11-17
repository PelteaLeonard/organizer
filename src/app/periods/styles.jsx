import { styled } from "@mui/material/styles";
import {
  Today,
  Event,
  DateRange,
  CalendarToday,
  CalendarMonth,
  Inbox,
  CheckBox,
  Delete,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";

export const Container = styled("div")({
  flex: "0 0 220px",
  padding: "16px 8px",
});

export const List = styled("ul")({
  listStyleType: "none",
});

export const Item = styled("li")({
  height: "40px",
});

export const ItemButton = styled(Button)({
  width: "100%",
  padding: "0 12px",
  textTransform: "none",
  height: "100%",
  color: "#696969",
  ":hover": {
    backgroundColor: "#4772FA0D",
  },
});

export const Number = styled("span")({
  marginLeft: "auto",
  fontSize: "12px",
});

export const TodayIcon = styled(Today)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const CalendarTodayIcon = styled(CalendarToday)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const EventIcon = styled(Event)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const DateRangeIcon = styled(DateRange)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const CalendarMonthIcon = styled(CalendarMonth)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const InboxIcon = styled(Inbox)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const CheckBoxIcon = styled(CheckBox)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const DeleteIcon = styled(Delete)({
  fontSize: "20px",
  opacity: ".7",
  color: "#696969",
});

export const ItemDivider = styled(Divider)({
  color: " rgba(25, 25, 25, 0.1)",
});

export const Text = styled("span")({
  fontSize: "14px",
});
