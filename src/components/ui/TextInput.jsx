// libs
import PropTypes from "prop-types";
// styles
import "./ui.scss";

/**
 * @param {string} name - identifier
 * @param {string} label - label text
 * @param {string} placeholder - label text shown inside text input
 * @param {any} value - state that is responsible for value of this component
 * @param {state setter} onChange :
 *      val => {} - pointer to state setter, that takes setting value as parameter
 * @param {bool} error - info if text input should be red
 * @param {string} errorMessage - [non obligatory] label text shown below input field with error info
 */
const TextInput = (props) => {
    return (
        <div className="TextInput">
            <label htmlFor={`id-${props.name}`}>
                {props.label}
            </label>
            <input 
                id={`id-${props.name}`}
                type="text" 
                className={`TextInput ${props.error ? "border-error" : "border-normal"}`} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => props.onChange(e.target.value)}
            />
            <label htmlFor={`id-${props.name}`} className="error-message color-error">
                {props.error ? props.errorMessage : ""}
            </label>
        </div>
    );
}

TextInput.propTypes = {
    // identigier
    name: PropTypes.string.isRequired,
    // visual informations
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    // state that cover value and it's setter
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    // errors
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}

export default TextInput;