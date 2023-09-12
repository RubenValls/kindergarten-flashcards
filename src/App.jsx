import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Topic from "./pages/Topic";

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
    {
      path: "/game/:topic",
      element: <Topic/>,
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
