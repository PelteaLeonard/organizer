import Task from "./task";

import {
  ActionsContainer,
  Checkbox,
  FlagIcon,
  FlagIconButton,
  DateInput,
  MainContainer,
  InputDivider,
} from "./styles";

import { Divider } from "@mui/material";
import { useState } from "react";
import { formatDateTime } from "../../utils/date";

function Content() {
  const currentDateTime = formatDateTime(new Date());

  const [date, setDate] = useState(currentDateTime);

  const handleChangeDate = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  return (
    <MainContainer>
      <ActionsContainer>
        <Checkbox size="small" />
        <InputDivider orientation="vertical" />
        <DateInput
          type="datetime-local"
          value={date}
          onChange={handleChangeDate}
        ></DateInput>
        <FlagIconButton size="small">
          <FlagIcon />
        </FlagIconButton>
      </ActionsContainer>
      <Divider />
      <Task />
    </MainContainer>
  );
}

export default Content;
