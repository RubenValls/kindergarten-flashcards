import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import Game from "./pages/Game";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "/game",
      element: <Game/>,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
