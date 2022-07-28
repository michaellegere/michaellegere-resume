import './SecondaryButton.css'

const SecondaryButton = props => {

    return <input className='secondary-button' type='button' value={props.text} onclick={props.onclick} />
}

export default SecondaryButton;