import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold"> NPRK </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#about"> About Me </a>
                    </li>
                    <li>
                        <a href="#whatido"> What I Do </a>
                    </li>
                    <li>
                        <a href="#resume"> Resume </a>
                    </li>
                    <li>
                        <a href="#portfolio"> Portfolio </a>
                    </li>
                    <li>
                        <a href="#contact"> Contact </a>
                    </li>
                    <li>
                        <a href="#blog"> Blog </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;