import React from "react"
import ReactDOM from "react-dom"

import "./style.css"

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="text">
                    <label>Path</label>
                    <input type="text"></input>
                </div>
                <div className="text">
                    <label>Pattern</label>
                    <input type="text"></input>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

var root = document.getElementById("root")
ReactDOM.render(<App />, root)