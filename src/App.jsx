import { Routes, Route } from "react-router-dom";
import Layout from "./components/main/Layout";
import Public from "./components/Public";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
