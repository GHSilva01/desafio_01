import Login from './pages/login'
import Calendario from './pages/calendario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/calendario' element={<Calendario />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas