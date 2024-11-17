/* eslint-disable react/prop-types */

import AddToDoInput from "./add-todo-input";
import {
  ActionsContainer,
  ActionsLeftContainer,
  ActionsRightContainer,
  CheckBox,
  CompletedContainer,
  CompletedNumber,
  CompletedText,
  ExpandMoreIcon,
  InputFieldWrapper,
  MainContainer,
  MenuOpenIcon,
  MenuOpenIconButton,
  MoreHorizIcon,
  MoreHorizIconButton,
  SwapVertIcon,
  SwapVertIconButton,
  TaskItem,
  TasksList,
  Text,
  Title,
  TopContainer,
} from "./styles";

function Todos(props) {
  const { title } = props;

  return (
    <MainContainer>
      <ActionsContainer>
        <ActionsLeftContainer>
          <MenuOpenIconButton size="small">
            <MenuOpenIcon />
          </MenuOpenIconButton>
          <Title>{title}</Title>
        </ActionsLeftContainer>
        <ActionsRightContainer>
          <SwapVertIconButton size="small">
            <SwapVertIcon />
          </SwapVertIconButton>
          <MoreHorizIconButton size="small">
            <MoreHorizIcon />
          </MoreHorizIconButton>
        </ActionsRightContainer>
      </ActionsContainer>
      <InputFieldWrapper>
        <AddToDoInput />
      </InputFieldWrapper>
      <TasksList>
        <TaskItem>
          <CheckBox size="small" />
          <Text>hxgus</Text>
        </TaskItem>
        <TaskItem>
          <CheckBox size="small" />
          <Text>hxgu</Text>
        </TaskItem>
        <TaskItem>
          <CheckBox size="small" />
          <Text>hxgusd</Text>
        </TaskItem>
      </TasksList>
      <CompletedContainer>
        <TopContainer>
          <ExpandMoreIcon />
          <CompletedText>Completed</CompletedText>
          <CompletedNumber>0</CompletedNumber>
        </TopContainer>
      </CompletedContainer>
    </MainContainer>
  );
}

export default Todos;
