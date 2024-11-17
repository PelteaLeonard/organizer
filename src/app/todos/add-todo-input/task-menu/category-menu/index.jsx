/* eslint-disable react/prop-types */
import {
  CategoryMenuItem,
  CategoryMenuList,
  CheckIcon,
  InboxIcon,
  InputField,
  Text,
} from "./styles";

function CategoryMenu(props) {
  const { anchorElement, handleCloseMenu } = props;

  return (
    <CategoryMenuList
      id="category-menu"
      open={Boolean(anchorElement)}
      onClose={handleCloseMenu}
      anchorEl={anchorElement}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      MenuListProps={{
        "aria-labelledby": "category-menu-item",
      }}
    >
      <CategoryMenuItem>
        <InputField
          fullWidth
          size="small"
          placeholder="Search"
          variant="outlined"
          onKeyDown={(event) => event.stopPropagation()}
        />
      </CategoryMenuItem>
      <CategoryMenuItem>
        <InboxIcon />
        <Text>Inbox</Text>
        <CheckIcon />
      </CategoryMenuItem>
    </CategoryMenuList>
  );
}
export default CategoryMenu;
