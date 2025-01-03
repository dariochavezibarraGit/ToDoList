import { useState } from "react";

interface Props {
  unfinished: string[];
  completed: string[];
  heading: string;
}

function Heading({ unfinished, completed, heading }: Props) {
  const [navPage, setNavPage] = useState(1);

  return (
    <>
      <h1 className="text-center">{heading}</h1>

      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <a
            className={navPage === 1 ? "nav-link active" : "nav-link"}
            onClick={() => setNavPage(1)}
          >
            Unfinished
          </a>
        </li>

        <li>
          <a
            className={navPage === 2 ? "nav-link active" : "nav-link"}
            onClick={() => setNavPage(2)}
          >
            Completed
          </a>
        </li>
      </ul>
    </>
  );
}

export default Heading;
