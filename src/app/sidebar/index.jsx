import {
  Nav,
  CheckBoxIcon,
  EditCalendarIcon,
  SearchIcon,
  NotificationsIcon,
  HelpIcon,
  PersonIcon,
  TopIconsContainer,
  BottomIconsContainer,
  PersonIconWrapper,
} from "./styles";

function Sidebar() {
  return (
    <Nav>
      <PersonIconWrapper>
        <PersonIcon />
      </PersonIconWrapper>
      <TopIconsContainer>
        <CheckBoxIcon />
        <EditCalendarIcon />
        <SearchIcon />
      </TopIconsContainer>
      <BottomIconsContainer>
        <NotificationsIcon />
        <HelpIcon />
      </BottomIconsContainer>
    </Nav>
  );
}
export default Sidebar;
