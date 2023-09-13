import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
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

  useEffect(() => {
    let audio = document.getElementById("mainAudio");
    audio.volume = 0.1;
  }, []);

  return (
    <div className="app">
      <RouterProvider router={router} />
      <audio src="../assets/music/backgroundMusic.mp3" id="mainAudio" autoPlay loop></audio>
    </div>
  )
}

export default App
