import { useState } from "react";
import { formatDateTime } from "../../../utils/date";
import {
  DateInput,
  ExpandMoreIcon,
  ExpandMoreIconButton,
  InputDivider,
  InputField,
} from "./styles";
import { InputAdornment } from "@mui/material";
import TaskMenu from "./task-menu";

function AddToDoInput() {
  const currentDateTime = formatDateTime(new Date());

  const [date, setDate] = useState(currentDateTime);
  const [taskMenuAnchorElement, setTaskMenuAnchorElement] = useState(null);
  const [categoryMenuAnchorElement, setCategoryMenuAnchorElement] =
    useState(null);

  const handleChangeDate = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const handleOpenTaskMenu = (event) => {
    setTaskMenuAnchorElement(event.currentTarget);
  };

  const handleOpenCategoryMenu = (event) => {
    setCategoryMenuAnchorElement(event.currentTarget);
  };

  const handleCloseTaskMenu = () => {
    setTaskMenuAnchorElement(null);
    setCategoryMenuAnchorElement(null);
  };

  const handleCloseCategoryMenu = () => {
    setCategoryMenuAnchorElement(null);
  };

  return (
    <InputField
      fullWidth
      size="small"
      placeholder='+ Add task to "Inbox", press Enter to save.'
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <DateInput
              type="datetime-local"
              value={date}
              onChange={handleChangeDate}
            />
            <InputDivider orientation="vertical" />
            <ExpandMoreIconButton
              id="priority-button"
              size="small"
              onClick={handleOpenTaskMenu}
              aria-haspopup="true"
              aria-expanded={taskMenuAnchorElement ? "true" : undefined}
              aria-controls={
                taskMenuAnchorElement ? "priority-menu" : undefined
              }
            >
              <ExpandMoreIcon />
            </ExpandMoreIconButton>
            <TaskMenu
              taskMenuAnchorElement={taskMenuAnchorElement}
              categoryMenuAnchorElement={categoryMenuAnchorElement}
              handleOpenCategoryMenu={handleOpenCategoryMenu}
              handleCloseTaskMenu={handleCloseTaskMenu}
              handleCloseCategoryMenu={handleCloseCategoryMenu}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}
export default AddToDoInput;
