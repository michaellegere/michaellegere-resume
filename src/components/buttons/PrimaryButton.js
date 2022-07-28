import './PrimaryButton.css'

const PrimaryButton = props => {

    return <input className='primary-button' type='button' value={props.text} onclick={props.onclick} />
}

export default PrimaryButton;