import { Outlet } from "react-router-dom";
import Bar from "./header/Bar";

function App() {
  return (
    <div>
      {" "}
      <Bar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
