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
import './App.css';
import { MyApp } from "./MyApp";

function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

export default App;
