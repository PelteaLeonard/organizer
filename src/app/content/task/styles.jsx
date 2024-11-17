import { Checklist } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Title = styled("h4")({});

export const CheckListIconButton = styled(IconButton)({});

export const CheckListIcon = styled(Checklist)({});

export const Description = styled("p")({
  fontSize: "14px",
  color: "rgba(25, 25, 25, .8)",
});
