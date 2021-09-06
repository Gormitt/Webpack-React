// styles
import "./Todos.scss";

// TEST
const todos = [
    {
        name: "Praca nad projektem",
        
    },
    {
        name: "Dom",
        
    }
]

const Todos = () => {
    return (
        <div className="Todos">
            {todos.map((todoCluster, i) => (
                <div key={i} className="todos-cluster">
                    <div className="name">{todoCluster.name}</div>
                    <div className="right">
                        <div className="progress">25%</div>
                        <div className="divider" />
                        <div className="enter">
                            <i className="bx bx-right-arrow-alt bx-sm" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todos;