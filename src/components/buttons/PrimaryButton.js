import './PrimaryButton.css'

const PrimaryButton = props => {

    return <input className='primary-button' type='button' value={props.text} />
}

export default PrimaryButton;