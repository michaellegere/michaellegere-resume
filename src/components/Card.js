import './Card.css';

const Card = props => {

    return (
        <section className='project-card'>

            <img src={props.img} alt={props.imgAlt} />

            <h3>{props.project}</h3>

        </section>
    );
}

export default Card;