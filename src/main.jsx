import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewComponent from "./components/addComponent/addComponent";
import EditComponent from "./components/editComponent/editComponent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/add",
    element: <AddNewComponent />,
  },
  {
    path: "/admin/edit",
    element: <EditComponent />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
