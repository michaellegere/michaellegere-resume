import './Footer.css';

{/*
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
*/}

const Footer = () => {

    return (
        <footer className='footer'>

            <h3>Thanks for checking out my site,{<br />} Check back for updates soon!</h3>
            <h5>Michael Legere, 2022</h5>

            {/* <PrimaryButton text='Contact Me' /> */}
            {/* <SecondaryButton text='View Resume PDF' /> */}

        </footer>
    );
}

export default Footer;