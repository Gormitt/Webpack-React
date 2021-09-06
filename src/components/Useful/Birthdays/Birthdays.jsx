// styles
import "./Birthdays.scss";

// TEST
const birthdays = [
    {
        name: "Marcin",
        surname: "Włoczewski",
        day: 25,
        month: "cze"
    },
    {
        name: "Marta",
        surname: "Lis",
        day: 1,
        month: "kwi"
    }
]

const Birthdays = () => {
    return (
        <div className="Birthdays">
            {birthdays.map((bd, i) => (
                <div key={i} className="bd">
                    <div>{bd.name} {bd.surname}</div>
                    <div>99d</div>
                    <div>({bd.day} {bd.month})</div>
                </div>
            ))}
        </div>
    );
}

export default Birthdays;