import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/main";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
