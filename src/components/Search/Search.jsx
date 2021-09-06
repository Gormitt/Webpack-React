// libs
import { useState, useEffect } from "react";
// styles
import "./Search.scss";

const Search = () => {
    const [phrase, setPhrase] = useState("");

    useEffect(() => {
        // find element in DOM
        const elem = document.getElementById("google-input-search-field");
        // prepare on click handler
        const clickHandler = e => {
            if (e.key === "Enter") {
                window.open(`http://www.google.com/search?q=${phrase}`);
                elem.value = "";
            }
        }

        // component did mount
        // bind handler to proper event listener
        elem.addEventListener("keydown", clickHandler);
        // component will unmount
        // unbind handler from proper event listener
        return () => {
            elem.removeEventListener("keydown", clickHandler);
        }
    });

    return (
        <div className="Search">
            <div className="container">
                <div className="icon">
                    <i className="bx bxl-google bx-sm" />
                </div>
                <input
                    id="google-input-search-field"
                    type="text" 
                    placeholder="Szukaj w Google..." 
                    onChange={e => setPhrase(e.target.value)}
                />
            </div>
            <div className="author">
                <code>Dawid_Jusko@unsplash.com</code>
            </div>
        </div>
    );
}

export default Search;