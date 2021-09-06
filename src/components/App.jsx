// styles
import "./App.scss";
// components
import Search from "./Search/Search";
import Links from "./Links/Links";
import Useful from "./Useful/Useful";

const App = () => {
    return (
        <div className="App">
            <Search />
            <Links />
            
            <Useful />
        </div>  
    );
}

export default App;