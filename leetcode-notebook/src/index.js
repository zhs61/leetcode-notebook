import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewNote from "./components/NewNote";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="NewNote" element={<NewNote />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
