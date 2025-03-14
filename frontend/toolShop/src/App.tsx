import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/productDetail";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
    return (
        <Router>
            {/* Contenedor principal con flexbox */}
            <div className="flex flex-col min-h-screen">
                {/* Navbar siempre visible en la parte superior */}
                <Navbar />

                {/* Contenido de las páginas (ocupa el espacio restante) */}
                <main className="flex-grow pt-16"> {/* Añade padding-top para evitar que el contenido se solape con el Navbar */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/producto" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;