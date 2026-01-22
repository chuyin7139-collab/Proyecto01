import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'
import './App.css'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />

      {/* ===== PARTE B: SEGUNDO ELEMENTO ANIMADO ===== */}
      <div className="main-content">
        <button className="btn-anim">Click Aquí</button>
      </div>
    </div>
  )
}

export default App