import './UpButton.css';

const UpButton = props => {
    return (
        <input type='button' className='up-button'
            /* style={{ scrollBehavior: smooth }} */
            href={props.link} />
    );
}

export default UpButton;