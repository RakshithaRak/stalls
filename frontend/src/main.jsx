import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.scss";
import Router from "./services/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
