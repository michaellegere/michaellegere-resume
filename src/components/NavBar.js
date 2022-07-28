import './NavBar.css';

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <ul>

                <li><a href="/">&#127968; home</a></li>
                <li><a href="resume">&#128190; resume</a></li>
                <li><a href="contact">&#128188; contact</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;