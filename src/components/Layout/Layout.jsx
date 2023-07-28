import React from "react";
import nprogress from "nprogress";
import { Container, Grid } from "semantic-ui-react";
import SideMenu from "./SideMenu";
// import Search from "./Search";
import Navbar from "./Navbar";
import MobileHeader from "./MobileHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'semantic-ui-css/semantic.min.css'

function Layout({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <>
          <div style={{ marginLeft: "1rem", marginRight: "2rem" }}>
            <Grid>
                  <Grid.Row only="mobile">
                    {/* <MobileHeader user={user} /> */}
                  </Grid.Row>

                  <Grid.Column
                    only="tablet computer"
                    className="menuCol"
                    floated="left"
                    tablet={1}
                    computer={2}
                  >
                    {/* <SideMenu user={user} /> */}
                  </Grid.Column>

                  <Grid.Column mobile={16} tablet={15} computer={12}>
                    {children}
                  </Grid.Column>

                  <Grid.Column
                    className="menuCol searchCol"
                    computer={2}
                    only="computer"
                  >
                    <div className="stickyCol">
                      {/* <Search /> */}
                    </div>
                  </Grid.Column>
              
            </Grid>
          </div>
        </>
    </QueryClientProvider>
  );
}

export default Layout;
