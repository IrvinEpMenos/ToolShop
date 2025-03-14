import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/atasiWhite.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="h-8 md:h-10 lg:h-12 w-auto" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu Links */}
                <div className={`absolute top-16 left-0 w-full bg-gray-800 text-center md:static md:flex md:w-auto md:bg-transparent ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to="/" className="block py-2 px-4 md:inline-block hover:bg-gray-700 md:hover:bg-transparent">Home</Link>
                    <Link to="/producto" className="block py-2 px-4 md:inline-block hover:bg-gray-700 md:hover:bg-transparent">Producto</Link>
                    <Link to="/cart" className="block py-2 px-4 md:inline-block hover:bg-gray-700 md:hover:bg-transparent">Carrito</Link>
                </div>
            </div>
        </nav>
    );
}