import React from "react";
import { Grid } from "semantic-ui-react";

const MenuRow = ({ menuName, href, iconName, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const relativeURL = e.currentTarget.href.replace(window.location.origin, "");
    window.location.href = relativeURL;
  };

  return (
    <Grid.Row as="a" href={href} className="menuRow" onClick={handleClick}>
      <Grid.Column>
        <i className={`${iconName} icon`} />
        {menuName}
      </Grid.Column>
    </Grid.Row>
  );
};

const SideMenu = ({ currentUser, handleLogout }) => {

  return (
    <div className="stickyCol">
      <Grid>
        <MenuRow href="/" menuName="Home" iconName="home" />
        <MenuRow href="https://social-iota-nine.vercel.app" menuName="Social" iconName="react" />
        {/* <MenuRow only="mobile tablet" iconName="search" href="/search" /> */}
        {currentUser && (
          <>
            {currentUser.isSeller && (
              <>
                <MenuRow href="/mygigs" menuName="Gigs" />
                <MenuRow href="/add" menuName="Add" />
              </>
            )}
            
            <MenuRow href="https://workmanagement-tool-4ivz.vercel.app" menuName="setting" />
            <MenuRow href="/orders" menuName="Order" />
            <MenuRow href="/messages" menuName="Messages" />
            <MenuRow onClick={handleLogout} menuName={"Logout"} />
          </>
        )}
        {!currentUser && (
          <>
            <MenuRow href="/login" menuName={"Login"} />
            <MenuRow href="/register" menuName={"Register"} />
          </>
        )}
      </Grid>
    </div>
  );
};

export default SideMenu;
