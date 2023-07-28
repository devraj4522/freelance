import { useCallback } from "react";
import { Menu, Icon, Dropdown } from "semantic-ui-react";
import { useHistory, NavLink } from "react-router-dom";
// import { logoutUser } from "../../utils/authUser";

function MobileHeader({ user }) {
  const { unreadNotification, email, unreadMessage, username } = user;
  const history = useHistory();

  const isActive = useCallback((route) => history.location.pathname === route, [history]);

  const push = useCallback(
    (e) => {
      e.preventDefault();
      history.push(e.currentTarget.href);
    },
    [history]
  );

  const common = (menuItem = true) => ({
    as: NavLink,
    onClick: push,
    ...(menuItem && { header: true })
  });

  return (
    <Menu fluid borderless widths={4}>
      <Menu.Item {...common()} to="/" active={isActive("/")}>
        <Icon name="home" size="large" />
      </Menu.Item>

      <Menu.Item
        {...common()}
        to="/messages"
        active={isActive("/messages") || unreadMessage}
      >
        <div style={{ position: "relative" }}>
          {unreadMessage && <div className="menuIconBadge mobile" />}

          <Icon name="mail outline" size="large" />
        </div>
      </Menu.Item>

      <Menu.Item
        {...common()}
        to="/notifications"
        active={isActive("/notifications") || unreadNotification}
      >
        <div style={{ position: "relative" }}>
          {unreadNotification && <div className="menuIconBadge mobile" />}

          <Icon name="bell outline" size="large" />
        </div>
      </Menu.Item>

      <Dropdown item icon="bars" direction="left">
        <Dropdown.Menu>
          <Dropdown.Item
            {...common(false)}
            to={`/${username}`}
            active={isActive(`/${username}`)}
          >
            <Icon name="user" size="large" />
            Account
          </Dropdown.Item>

          <Dropdown.Item
            {...common(false)}
            to="/search"
            active={isActive("/search")}
          >
            <Icon name="search" size="large" />
            Search
          </Dropdown.Item>

          <Dropdown.Item onClick={() => console.log("logoutUser(email)")}>
            <Icon name="sign out alternate" size="large" />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}

export default MobileHeader;
