import React from "react";
import Button from "../button/Button";
import "./window.css"
import { useState } from "react";

function Window(props) {

    const [visibility, setstate] = useState({ width: "30rem" })

    function load() {
        props.load(true)
        setstate({ display: "none" })
    }
    function noload() {
        setstate({ display: "none" })
    }

    return <div className="card" style={visibility}>
        <div className="card-body">
            <p className="card-text">No local data. Do you want to load data from server?</p>
            <div className="buttons">
            <Button name="Yes" class="btn btn-success" click={load} />
            <Button name="No" class="btn btn-danger" click={noload} />
            </div>
        </div>
    </div>
}

export default Window;


