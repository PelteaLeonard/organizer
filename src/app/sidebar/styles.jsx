import { CheckBox, EditCalendar, Help, Notifications, Person, Search } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const Nav = styled("nav")({
    display: " flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#F1F4FF",
    padding: "16px 8px",
    flex: "0 0 50px",
    gap: "24px",
  });
  
  export const PersonIconWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    height: "40px",
  });
  
  export const TopIconsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  });
  export const PersonIcon = styled(Person)({
    fontSize: "32px",
    opacity: ".7",
    color: "#696969",
    ":hover": {
      cursor: "pointer",
      opacity: "1",
    },
  });
  
  export const CheckBoxIcon = styled(CheckBox)({
    fontSize: "24px",
    opacity: ".7",
    color: "#696969",
    ":hover": {
      cursor: "pointer",
      opacity: "1",
    },
  });
  
  export const EditCalendarIcon = styled(EditCalendar)({
    fontSize: "24px",
    color: "#696969",
    opacity: ".7",
    ":hover": {
      cursor: "pointer",
      opacity: "1",
    },
  });
  
  export const SearchIcon = styled(Search)({
    fontSize: "24px",
    color: "#696969",
    opacity: ".7",
    ":hover": {
      cursor: "pointer",
      opacity: "1",
    },
  });
  
  export const BottomIconsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginTop: "auto",
  });
  
  export const NotificationsIcon = styled(Notifications)({
    fontSize: "24px",
    opacity: ".7",
    color: "#696969",
    ":hover": {
      cursor: "pointer",
      opacity: "1",
    },
  });
  
  export const HelpIcon = styled(Help)({
    fontSize: "24px",
    opacity: ".7",
    color: "#696969",
    ":hover": {
      cursor: "pointer",
      opacity: "1",
    },
  });