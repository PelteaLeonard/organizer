import { Check, Inbox } from "@mui/icons-material";
import { Menu, MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CategoryMenuList = styled(Menu)({
  marginLeft: "5px",
  "& .MuiList-root": {
    padding: "0",
  },
});

export const CategoryMenuItem = styled(MenuItem)({
  padding: "10px",
});

export const InputField = styled(TextField)({
  width: "140px",
  "& .MuiInputBase-root": {
    padding: "0 2px 0 12px",
  },
  "& .MuiInputBase-input": {
    padding: "5px 0",
  },
});

export const InboxIcon = styled(Inbox)({
  fontSize: "18px",
  color: "#4772FA",
});

export const Text = styled("p")({
  fontSize: "13px",
  color: "#4772FA",
  marginLeft: "5px",
});

export const CheckIcon = styled(Check)({
  fontSize: "18px",
  color: "#4772FA",
  marginLeft: "auto",
});
