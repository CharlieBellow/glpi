
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//importando os estilos
import './Styles/reset.css';

// importando as rotas
import Dashboard from './Pages/Dashboard'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard /> }>
          {/*<Route path="/Categorias" element={<Categorias />} />*/}
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
