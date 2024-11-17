/* eslint-disable react/prop-types */
import CategoryMenu from "./category-menu";
import { IconButton, Menu } from "@mui/material";
import {
  ChevronRightIcon,
  FlagIcon,
  IconsContainer,
  InboxIcon,
  InboxText,
  PriorityContainer,
  Span,
  SplitDivider,
  SubjectIcon,
  SubjectText,
  TaskMenuItem,
  Text,
} from "./styles";

function TaskMenu(props) {
  const {
    taskMenuAnchorElement,
    categoryMenuAnchorElement,
    handleOpenCategoryMenu,
    handleCloseTaskMenu,
    handleCloseCategoryMenu,
  } = props;
  return (
    <Menu
      id="priority-menu"
      open={Boolean(taskMenuAnchorElement)}
      onClose={handleCloseTaskMenu}
      anchorEl={taskMenuAnchorElement}
      MenuListProps={{
        "aria-labelledby": "priority-button",
      }}
    >
      <TaskMenuItem onClick={handleCloseTaskMenu}>
        <PriorityContainer>
          <Text>Priority</Text>
          <IconsContainer>
            <IconButton size="small">
              <FlagIcon priority="high" />
            </IconButton>
            <IconButton size="small">
              <FlagIcon priority="medium" />
            </IconButton>
            <IconButton size="small">
              <FlagIcon priority="low" />
            </IconButton>
            <IconButton size="small">
              <FlagIcon priority="standard" />
            </IconButton>
          </IconsContainer>
        </PriorityContainer>
      </TaskMenuItem>
      <SplitDivider />
      <TaskMenuItem id="category-menu-item" onClick={handleOpenCategoryMenu}>
        <InboxIcon />
        <InboxText>
          Add to <Span>Inbox</Span>
        </InboxText>
        <ChevronRightIcon />
      </TaskMenuItem>
      <CategoryMenu
        anchorElement={categoryMenuAnchorElement}
        handleCloseMenu={handleCloseCategoryMenu}
      />
      <TaskMenuItem onClick={handleCloseTaskMenu}>
        <SubjectIcon />
        <SubjectText>Add from Template</SubjectText>
      </TaskMenuItem>
    </Menu>
  );
}
export default TaskMenu;
