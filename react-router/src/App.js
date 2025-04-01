import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="second" element={<SecondPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
