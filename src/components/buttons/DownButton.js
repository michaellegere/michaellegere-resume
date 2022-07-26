import './DownButton.css';

const DownButton = props => {
    return (
        <input type='button' className='down-button'
            /* style={{ scrollBehavior: smooth }} */
            href={props.link} />
    );
}

export default DownButton;