import { useState } from "react";
import Content from "./content";
import Periods from "./periods";
import Sidebar from "./sidebar";
import { MainContainer } from "./styles";
import Todos from "./todos";

function App() {
  const [period, setPeriod] = useState("Today");

  return (
    <MainContainer>
      <Sidebar />
      <Periods setPeriod={setPeriod} />
      <Todos title={period} />
      <Content />
    </MainContainer>
  );
}

export default App;
