// libs
import PropTypes from "prop-types";
// styles
import "./ui.scss";

/**
 * @param {bool} open - info if modal should be open
 * @param {state setter} close - invoked when user wan't to close the modal
 * @param {string} title - title of the modal
 * @param {string} subtitle - [non obligatory] sub title of the modal
 */
const Modal = (props) => {
    return props.open && (
        <div className="Modal">
            <div className="backdrop" onClick={() => props.close()} />
            <div className="modal-container">
                {/* topbar */}
                <div className="top-bar">
                    <div>
                        <div className="title">{props.title}</div>
                        <div className="subtitle">{props.subtitle}</div>
                    </div>
                    <div>
                        <i className="bx bx-x bx-md close-button" onClick={() => props.close()} />
                    </div>
                </div>
                {/* content */}
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    // open info and closing handler
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    // titles info
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default Modal;