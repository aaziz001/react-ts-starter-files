import RoutesLayout from "./RoutesLayout";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import Home from "../components/Home";
import theme from "../theme/theme";
import store from "../store";

const Routes = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <RoutesLayout path={"/"} component={Home} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
};

export default Routes;
