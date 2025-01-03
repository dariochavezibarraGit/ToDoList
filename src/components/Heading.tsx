import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UnfinishedTasks from "./UnfinishedTasks";
import CompletedTasks from "./CompletedTasks";

interface Props {
  heading: string;
}

function Heading({ heading }: Props) {
  const [navPage, setNavPage] = useState("unfinishedTasks");

  return (
    <>
      <Router>
        <h1 className="text-center">{heading}</h1>

        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link
              className={
                navPage === "unfinishedTasks" ? "nav-link active" : "nav-link"
              }
              onClick={() => setNavPage("unfinishedTasks")}
              to="/unfinished-tasks"
            >
              Unfinished
            </Link>
          </li>

          <li>
            <Link
              className={
                navPage === "completedTasks" ? "nav-link active" : "nav-link"
              }
              onClick={() => setNavPage("completedTasks")}
              to="/completed-tasks"
            >
              Completed
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/unfinished-tasks" element={<UnfinishedTasks />} />
          <Route path="/completed-tasks" element={<CompletedTasks />} />
        </Routes>
      </Router>
    </>
  );
}

export default Heading;
