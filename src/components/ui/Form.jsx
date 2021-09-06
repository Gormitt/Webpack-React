// libs
import { useState } from "react";
import PropTypes from "prop-types";
// components
import TextInput from "./TextInput";
import Select from "./Select";
import Button from "./Button";
// styles
import "./ui.scss";

/**
 * SUPPORTED INPUTS:
 *      - TextInput
 *      - Select
 * 
 * @param {JSON[]} fields : {
 *          name: string - name of the field
 *          label: string - label of the field
 *          type: string - "textInput" | "select"
 * 
 *          valueInit: value that initiates state
 *          valueObligatory: boolean - info if value must be present
 *          valueEmpty: 
 *              - when value is obligatory this field indicates what an empty value is
 *              - when value is non obligatory this can be null or undefined 
 *          validator: val => ...
 * 
 *          specialized: JSON: {
 *              >>> "textInput"
 *              placeholder: string - text placed in empty input field
 *              
 *              >>> "select"
 *              options: JSON[]: {
 *                  name: string - text of the option
 *                  value: any - value of option that will go to state
 *              }
 *          }
 * 
 *          map: string[] - instruction to grid how to place all components
 *      }
 * @param {number} width - width in px of the form
 */
const Form = (props) => {
    const [values, setValues] = useState(props.fields.reduce(
        (sum, curr) => ({
            ...sum,
            [curr.name]: curr.valueInit
        }),
        {}
    ));
    const [errors, setErrors] = useState(props.fields.reduce(
        (sum, curr) => ({
            ...sum,
            [curr.name]: {
                open: false,
                message: ""
            }
        }),
        {}
    ))

    const submit = (e) => {
        // prevent stupid reload :)
        e.preventDefault();
        // info if errors occured
        let anyErrors = false;
        // local errors object
        const localErrors = {};
        
        // run threw all validators
        for (let field of props.fields) {
            // field empty and value not obligatory
            if (values[field.name] === field.valueEmpty && !field.valueObligatory) {
                continue;
            }
            // field empty and value obligatory
            else if (values[field.name] === field.valueEmpty && field.valueObligatory) {
                // inform of errors
                anyErrors = true;
                // save message
                localErrors[field.name] = {
                    open: true,
                    message: `Pole "${field.label}" nie może być puste.`
                }
                // avoid ereasing message
                continue;
            }
            // field non empty
            else if (values[field.name] !== field.valueEmpty) {
                // when validator used with that value returns false
                if (!field.validator(values[field.name])) {
                    // inform of errors
                    anyErrors = true;
                    // save message
                    localErrors[field.name] = {
                        open: true,
                        message: `Pole "${field.label}" zawiera nieprawidłową wartość.`
                    }
                    // avoid ereasing message
                    continue;
                }
            }

            // no if executed - error in this field doesn't exist
            localErrors[field.name] = {
                open: false,
                message: ""
            }
        }

        // save updated errors
        setErrors(localErrors);
        // if no errors occured
        if (!anyErrors) {
            console.log("no errors - perfom action :)");
        }
    }

    return (
        <form 
            className="Form"
            autoComplete="off"
            onSubmit={e => submit(e)}
            style={{width: props.width}}
        >
            {props.fields.map((field, i) => 
                field.type === "textInput" ? (
                    <TextInput 
                        key={i}
                        name={field.name}
                        label={field.label}
                        value={values[field.name]}
                        placeholder={field.specialized.placeholder}
                        onChange={val => setValues({...values, [field.name]: val})}
                        error={errors[field.name].open}
                        errorMessage={errors[field.name].message}
                    />
                ) : field.type === "select" ? (
                    <Select 
                        key={i}
                        name={field.name}
                        label={field.label}
                        value={values[field.name]}
                        onChange={val => setValues({...values, [field.name]: val})}
                        options={field.specialized.options}
                    />
                ) : null
            )}

            <div className="button-holder">
                <Button>
                    Zapisz
                </Button>
            </div>
        </form>
    );
}

Form.propTypes = {
    fields: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired
}

export default Form;