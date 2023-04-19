import React, { useEffect, useState } from 'react'
import { Route, Routes, } from 'react-router-dom'

import { Welcome } from './pages/Welcome';
import { Name } from './pages/Name';
import { Game } from './pages/Game'
import { Congratulations } from './pages/Congratulations/Congratulations';
import './sass/main.scss'
import { useGame } from './context/game-context';

function App() {
  const { getName } = useGame()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const nameLocalStorage = getName()
    setUserName(nameLocalStorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      {
        userName === ''
          ? <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/name' element={<Name />} />
            <Route path="*" element={<Welcome />} />
          </Routes>
          : <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/name' element={<Name />} />
            <Route path='/game' element={<Game />} />
            <Route path='/congrats' element={<Congratulations />} />
          </Routes>
      }
    </div>
  );
}

export default App;
