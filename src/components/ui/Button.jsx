// libs
import PropTypes from "prop-types";
// styles
import "./ui.scss";

/**
 * @param {function} onClick - [non-obligatory] function that is invoked after click
 */
const Button = (props) => {
    return (
        <div className="Button">
            <button onClick={() => props.onClick()}>
                {props.children}
            </button>
        </div>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}

Button.defaultProps = {
    onClick: () => console.log("No action was assigned to that button")
}

export default Button;