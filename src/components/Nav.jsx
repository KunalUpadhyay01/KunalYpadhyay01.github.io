import React from 'react';
import "../css/nav.css"

const Navbar = () => {
    return (
        <nav className='navStyle'>
            <div>
                <ul className='ulStyle'>
                    <li className='listStyle'>
                        About Me
                    </li>
                    <a href='#projects'>
                        <li className='listStyle'>
                            My Projects
                        </li>
                    </a>
                    <li className='listStyle'>
                        Blog
                    </li>
                    <li className='listStyle'>
                        Contact Me
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
