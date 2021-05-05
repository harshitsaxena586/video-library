import './neutron-ui.css'
import './App.css';
import {Routes,  Route} from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Playlists from './pages/Playlists';

function App() {
  return (
    <div className="App">
   <div><Toaster/></div>
  <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="category" element={<Category />}/>
    <Route path="playlists" element={<Playlists />}/>
    </Routes>
    </div>
  );
}

export default App;
