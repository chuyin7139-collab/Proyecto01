import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/secciones/Home.jsx";
import Cursos from "./componentes/secciones/Cursos.jsx";
import About from "./componentes/secciones/About.jsx";
import Navbar from "./componentes/Navbar.jsx";
import './App.css'

const App = () => {
  return (
    <div className="overflow-x-hidden min-h-screen">
      {/* ===== BACKGROUND AMARILLO SIMPLE ===== */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-50">
        {/* Círculos suaves amarillos */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200 rounded-full opacity-10"></div>
        
        {/* Rayos de sol suaves */}
        <div className="absolute top-10 right-1/4 w-40 h-3 bg-yellow-400 opacity-30 transform rotate-45"></div>
        <div className="absolute top-32 right-32 w-32 h-3 bg-yellow-400 opacity-20 transform -rotate-12"></div>
      </div>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <BrowserRouter>
        {/* Navbar con fondo semitransparente */}
        <div className="bg-white/80 backdrop-blur-sm shadow-sm">
          <Navbar />
        </div>
        
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8">
              <div className="bg-white/95 p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <Home />
              </div>
            </div>
          } />
          
          <Route path="/cursos" element={
            <div className="container mx-auto px-4 py-8">
              <div className="bg-white/95 p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <Cursos />
              </div>
            </div>
          } />
          
          <Route path="/about" element={
            <div className="container mx-auto px-4 py-8">
              <div className="bg-white/95 p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
                <About />
              </div>
            </div>
          } />
        </Routes>

        {/* Botón simple amarillo */}
        <div className="text-center py-8">
          <button className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition duration-300 shadow-md hover:shadow-lg font-medium">
            Explorar
          </button>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;