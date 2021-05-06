import './neutron-ui.css'
import './App.css';
import {Routes,  Route} from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Playlists from './pages/Playlists';
import Videoplayer from './pages/Videoplayer';
import History from './pages/History';

function App() {
  return (
    <div className="App">
   <div><Toaster/></div>
  <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>

    <Route path="/history" element={<History />}/>
    <Route path="/:filter" element={<Category />}/>
    <Route path="/:filter/:vid" element={<Videoplayer />}/>
    <Route path="playlists" element={<Playlists />}/>
    </Routes>
    </div>
  );
}

export default App;
