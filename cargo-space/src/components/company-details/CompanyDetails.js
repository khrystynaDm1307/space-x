import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./company-details.css"

function CompanyDetails(props) {

    const param = useParams()
    const currentlyCompany = props.list.filter(el => el.name === param.company.replace("-", ' '));
    let stringWithBoxes = currentlyCompany[0].boxes;

    if (!stringWithBoxes) { stringWithBoxes = "" }

    const [strOfBoxes, setNewStr] = useState(stringWithBoxes);
    const [bays, setBays] = useState(calculation(stringWithBoxes));

    function handleChange(e) {
        setNewStr(e.target.value)
        console.log(strOfBoxes)
        setBays(calculation(e.target.value))
        const newObj = Object.assign({}, currentlyCompany[0])
        newObj.boxes = strOfBoxes
        props.newObj(newObj)
    }

    function calculation(str) {

        const boxes = str.split(",").map(el => Number(el))
        const sumBoxes = boxes.reduce((sum, el) => sum + el)
        let bays = sumBoxes / 10;
        bays = sumBoxes % 10 === 0 ? bays : Math.trunc(bays) + 1;
        return bays
    }

    return <div>
        <h1>{currentlyCompany[0].name}</ h1>
        <p>{currentlyCompany[0].email}</p>
        <p>Number of needed bays: {bays}</p>
        <p>Cargo bays:</p>
        <form>
            <input type="text" value={strOfBoxes} onChange={handleChange} />
        </form>
    </div>


}
export default CompanyDetails
