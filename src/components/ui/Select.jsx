// libs
import { useState } from "react";
import PropTypes from "prop-types";
// styles
import "./ui.scss";

/**
 * @param {string} name - identifier 
 * @param {string} label - label text for user
 * @param {any} value - state that is responsible for value of this component
 * @param {state setter} onChange : 
 *      val => {} - pointer to state setter, that takes setting value as parameter
 * @param {JSON[]} options :
 *      {
 *          name: string    - name displayed in the list
 *          value: number   - value that will be set after choosing that option
 *      } 
 */
const Select = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="Select">
            {/* label */}
            <label htmlFor={`id-${props.name}`}>
                {props.label}
            </label>
            {/* handler of select */}
            <div 
                id={`id-${props.name}`} 
                className="handle" 
                onClick={() => setOpen(old => !old)}
            >
                <div>
                    {props.options.find(el => el.value === props.value).name}
                </div>
                <div className="button">
                    <i className={`bx bx-caret-right ${open ? "bx-rotate-90" : ""}`} />
                </div>
            </div>
            {/* list of options */}
            {open && (
                <div className="body">
                    {props.options.map((o, i) => (
                        <div 
                            key={i}
                            className="option"
                            onClick={() => {
                                props.onChange(o.value);
                                setOpen(false);
                            }}
                        >
                            {o.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

Select.propTypes = {
    // identifier
    name: PropTypes.string.isRequired,
    // visual informations
    label: PropTypes.string.isRequired,
    // state that cover value and it's setter
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    // options to display inside select
    options: PropTypes.array.isRequired
}

export default Select;