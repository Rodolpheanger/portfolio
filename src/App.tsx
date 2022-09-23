import { createGlobalStyle } from "styled-components";
import resetCss from "./utils/style/reset-css";
import { Fragment } from "react";
import AppRoutes from "./routes";

const GlobalStyle = createGlobalStyle`
    ${resetCss.reset}
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
`;
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  );
}

export default App;
