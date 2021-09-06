// styles
import "./Collections.scss";

// TEST
const collections = [
    {
        name: "Programowanie",
        icon: "bx-code-alt"
    },
    {
        name: "YT",
        icon: "bxl-youtube"
    },
    {
        name: "Podróże",
        icon: "bxs-plane-take-off"
    },
    {
        name: "Rozwój",
        icon: "bxs-heart"
    }
]

const Collections = () => {
    return (
        <div className="Collections">
            {collections.map((col, i) => (
                <div className="collection" key={i}>
                    <div className="logo">
                        <i className={`bx ${col.icon} bx-md`} />
                    </div>
                    <div>
                        <span>{col.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Collections;