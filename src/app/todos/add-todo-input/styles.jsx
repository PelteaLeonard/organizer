import { ExpandMore } from "@mui/icons-material";
import { Divider, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const InputField = styled(TextField)({
  "& .MuiInputBase-root": {
    padding: "0 2px 0 12px",
  },
  "& .MuiInputBase-input": {
    paddingLeft: "0",
    paddingRight: "0",
  },
});

export const DateInput = styled("input")({
  border: "0",
  outline: "none",
  padding: "4px 6px",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "rgba(25, 25, 25, .05)",
  },
});

export const InputDivider = styled(Divider)({
  height: "16px",
  backgroundColor: "rgba(25, 25, 25, .3)",
  width: "1px",
});

export const ExpandMoreIconButton = styled(IconButton)({
  padding: "4px",
});

export const ExpandMoreIcon = styled(ExpandMore)({
  fontSize: "18px",
});
