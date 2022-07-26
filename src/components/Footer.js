import './Footer.css';

const Footer = props => {
    return (
        <nav className='footer'>
            <ul>

                <li><a href='/'>Start the Page over<br /> &#8595; </a></li>
                <li><a href='/'>Check out the PDF<br /> &#8595; </a></li>
                <li><a href='/'>Contact Me<br /> &#8595; </a></li>

            </ul>
        </nav>
    );
}

export default Footer;