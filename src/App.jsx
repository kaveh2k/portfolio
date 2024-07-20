import { Routes, Route } from "react-router-dom";
import Layout from "./components/main/Layout";
import Public from "./components/Public";
import { Multistep, Newsletter } from "./components/projects/";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="multistep/*" element={<Multistep />} />
          <Route path="newsletter/*" element={<Newsletter />} />
          <Route path="*" element={<Public />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
