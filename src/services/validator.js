/**
 * Function validates inputs from form and returns errors if occured.
 * 
 * @param {JSON} inputs - every key is field name, every valus is value from form 
 * @param {array of JSON's} pattern - every JSON is info about each field
 * @returns {JSON} :
 *      - errors    -> where every key is field name and evert value is {open: true, message: <message>}
 */
const validateInputs = (inputs, pattern) => {
    const errs = {};

    for (let p of pattern) {
        const val = inputs[p.name];

        if (p.obligatory && val.length === 0) {
            errs[p.name] = {
                open: true,
                message: `Wartość "${p.label}" nie może być pusta.`
            };
            continue;
        }

        if (!p.regExp.test(val)) {
            errs[p.name] = {
                open: true,
                message: `Niepoprawna wartość.`
            }

            continue;
        }

        errs[p.name] = {
            open: false,
            message: ""
        };
    }

    return errs;
}

export default validateInputs;