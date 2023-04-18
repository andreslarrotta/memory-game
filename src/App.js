import {
  Route,
  Routes,
} from 'react-router-dom'

import { Welcome } from './pages/Welcome';
import './sass/main.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
