import './Hero.css';
import ImageOne from './pics/headshot.png';


const Hero = props => {

    return (
        <section className="hero">

            <br />
            <h1>Welcome to my Resume site.</h1>

            <img src={ImageOne} alt='Headshot' />

            <br />

        </section>
    );
}

export default Hero;