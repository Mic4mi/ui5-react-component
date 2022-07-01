// import {
//   FlexBox,
//   FlexBoxAlignItems,
//   FlexBoxDirection,
//   FlexBoxJustifyContent,
//   Link,
//   LinkDesign,
//   ShellBar
// } from '@ui5/webcomponents-react';
import { ThemeProvider } from "@ui5/webcomponents-react/dist/ThemeProvider";
import { HashRouter } from "react-router-dom";
import './App.css';
import { MyApp } from "./MyApp";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
