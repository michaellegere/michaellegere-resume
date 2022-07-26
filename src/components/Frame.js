import './Frame.css';

const Frame = props => {

    return (
        <section className="frame">

            <h2>{props.title}</h2>

            <hr />
            <br />

            <h3>{props.roleOne}</h3>
            <h5>{props.datesOne}</h5>
            <p>{props.descriptionOne}</p>

            <h3>{props.roleTwo}</h3>
            <h5>{props.datesTwo}</h5>
            <p>{props.descriptionTwo}</p>

            <h3>{props.roleThree}</h3>
            <h5>{props.datesThree}</h5>
            <p>{props.descriptionThree}</p>

            <p>{props.skills}</p>

            <br />
            <hr />
            <br />

        </section>
    );
}

export default Frame;
