/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import {
  List,
  Item,
  Text,
  Number,
  EventIcon,
  TodayIcon,
  Container,
  DateRangeIcon,
  CalendarTodayIcon,
  CalendarMonthIcon,
  InboxIcon,
  CheckBoxIcon,
  DeleteIcon,
  ItemButton,
} from "./styles";

const periods = [
  {
    icon: <CalendarMonthIcon />,
    text: "Last month",
    number: 0,
  },
  {
    icon: <DateRangeIcon />,
    text: "Last week",
    number: 1,
  },
  {
    icon: <TodayIcon />,
    text: "Yesterday",
    number: 3,
  },
  {
    icon: <CalendarTodayIcon />,
    text: "Today",
    number: 8,
  },
  {
    icon: <EventIcon />,
    text: "Tomorrow",
    number: 14,
  },
  {
    icon: <DateRangeIcon />,
    text: "Next week",
    number: 28,
  },
  {
    icon: <CalendarMonthIcon />,
    text: "Next Month",
    number: 40,
  },
  {
    icon: <InboxIcon />,
    text: "Inbox",
    number: 9,
  },
];

const actions = [
  {
    icon: <CheckBoxIcon />,
    text: "Completed",
    number: 8,
  },
  {
    icon: <DeleteIcon />,
    text: "Trash",
    number: 15,
  },
];

function Periods(props) {
  const { setPeriod } = props;

  const handleClickButton = (period) => {
    setPeriod(period);
  };

  return (
    <Container>
      <List>
        {periods.map(({ icon, text, number }) => (
          <Item key={text}>
            <ItemButton
              startIcon={icon}
              onClick={() => handleClickButton(text)}
            >
              <Text>{text}</Text>
              <Number>{number}</Number>
            </ItemButton>
          </Item>
        ))}
        <Divider />
        {actions.map(({ icon, text, number }) => (
          <Item key={text}>
            <ItemButton
              startIcon={icon}
              onClick={() => handleClickButton(text)}
            >
              <Text>{text}</Text>
              <Number>{number}</Number>
            </ItemButton>
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default Periods;
