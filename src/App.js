import {
  Route,
  Routes,
} from 'react-router-dom'

import { Welcome } from './pages/Welcome';
import { Name } from './pages/Name';
import './sass/main.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/name' element={<Name />} />
      </Routes>
    </div>
  );
}

export default App;
