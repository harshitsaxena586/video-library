import "./neutron-ui.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useApp } from "./context/appContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Playlists from "./pages/Playlists";
import Videoplayer from "./pages/Videoplayer";
import History from "./pages/History";
import Landing from "./pages/Landing";
function App() {
  const { state } = useApp();
  console.log(state);
  if (state.authToken) {
    axios.interceptors.request.use((config) => {
      config.headers.authorization = state.authToken;
      return config;
    });
  }

  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <Navbar />
      <button className="button-primary">test</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/:filter" element={<Category />} />
        <Route path="/:filter/:vid" element={<Videoplayer />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
