import {
  Route,
  Routes,
} from 'react-router-dom'

import { Welcome } from './pages/Welcome';
import { Name } from './pages/Name';
import { Game } from './pages/Game'
import { Congratulations } from './pages/Congratulations/Congratulations';
import './sass/main.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/name' element={<Name />} />
        <Route path='/game' element={<Game />} />
        <Route path='/congrats' element={<Congratulations />} />
      </Routes>
    </div>
  );
}

export default App;
