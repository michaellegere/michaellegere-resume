import './Hero.css';
import ImageOne from './pics/headshot.png';
import PrimaryButton from './buttons/PrimaryButton';

const Hero = props => {

    return (
        <section className="hero">

            <br />
            <h1>Welcome to my Resume site.</h1>

            <img src={ImageOne} alt='Headshot' />

            <br />

            <PrimaryButton text='Light/Dark Mode' onClick={props.func} />

            <br />

        </section>
    );
}

export default Hero;