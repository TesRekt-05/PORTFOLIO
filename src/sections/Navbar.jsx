import { useState } from 'react';
import { motion } from "framer-motion";

function Navigation() {
    return <ul className='nav-ul'>
        <li className='nav-li '>
            <a className='nav-link ' href='#Home '>Home
            </a>
        </li>
        <li className='nav-li '>
            <a className='nav-link'href='#about '>about
            </a>
        </li>
        <li className='nav-li '>
            <a className='nav-link'href='#work'>work
            </a>
        </li>
        <li className='nav-li '>
            <a className='nav-link'href='#contact '>contact
            </a>
        </li>
    </ul>
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40' >
            <div className=' mx-auto c-space max-w-7xl'>
                <div className='flex item-center justify-between py-2 sm:py-0'>
                    <a href='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
                        Sahil
                    </a>
                    <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white sm:hidden focus:outline-none'>
                        <img src={isOpen ? "assets/menu-close.png" : "assets/menu-wide.png"} className='w-6 h-6' alt="toggle" />
                    </button>
                    <nav className='hidden sm:flex ' >
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className='block sm:hidden overflow-hidden text-center'
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    style={{ maxHeight: "100vh" }}
                >
                    <nav className='pb-5'>
                        <Navigation />
                    </nav>
                </motion.div>
            )}
        </div>
    )
}

export default Navbar