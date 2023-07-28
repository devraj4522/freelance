import { Menu, Container, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Menu fluid borderless>
      <Container text>
        <NavLink to="/login">
          <Menu.Item header>
            <Icon size="large" name="sign in" />
            Login
          </Menu.Item>
        </NavLink>

        <NavLink to="/signup">
          <Menu.Item header>
            <Icon size="large" name="signup" />
            Signup
          </Menu.Item>
        </NavLink>
      </Container>
    </Menu>
  );
}

export default Navbar;
