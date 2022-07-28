import './Footer.css';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';

const Footer = props => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/contact';
        navigate(path);
    }

    return (
        <footer className='footer'>

            <h3>What next?</h3>

            <PrimaryButton text='Contact Me' onClick={routeChange} />
            <SecondaryButton text='View Resume PDF' onClick={routeChange} />

        </footer>
    );
}

export default Footer;