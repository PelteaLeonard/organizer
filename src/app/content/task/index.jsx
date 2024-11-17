import {
  ActionsContainer,
  CheckListIcon,
  CheckListIconButton,
  Description,
  MainContainer,
  Title,
} from "./styles";

function Task() {
  return (
    <MainContainer>
      <ActionsContainer>
        <Title>First task</Title>
        <CheckListIconButton size="small">
          <CheckListIcon />
        </CheckListIconButton>
      </ActionsContainer>
      <Description>Blabla</Description>
    </MainContainer>
  );
}
export default Task;
