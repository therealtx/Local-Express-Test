import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PublicLayout from "./components/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {/*<Route path="/second-page">
            <About />
          </Route>*/}
          <Route path="/" element={<Home />} />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
}
