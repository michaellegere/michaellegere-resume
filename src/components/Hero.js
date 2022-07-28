import './Hero.css';
import ImageOne from './pics/headshot.png';
{/* import PrimaryButton from './buttons/PrimaryButton'; */}


const Hero = props => {

    {/*
    function darkMode() {
        var element = document.getElementById('#root');
        element.classList.toggle("dark-mode");
    }
    */}

    return (
        <section className="hero">

            <br />
            <h1>Welcome to my Resume site.</h1>

            <img src={ImageOne} alt='Headshot' />

            <br />

            {/* <PrimaryButton text='Light/Dark Mode' onClick={() => darkMode()} /> */} 

            <br />

        </section>
    );
}

export default Hero;