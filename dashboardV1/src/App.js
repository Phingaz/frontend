import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";
import styled from "./App.module.css"

function App() {
  return (
    <div className={styled.app}>
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
