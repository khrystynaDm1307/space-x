import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Header from "../header/Header";
import ShipmentsList from "../shipments-list/ShipmentsList"
import CompanyDetails from "../company-details/CompanyDetails";
import "./shipments.css"

function Shipments(props) {

    const [filteredCompanies, setstate] = useState(props.companies)
    const [newObj, setNewObj] = useState()

    return <Router>
        <Header companies={props.companies} filterFunc={setstate} newObj={newObj}/>
        <div className="main">
            < Route>
                <ShipmentsList list={filteredCompanies} />
            </Route>
            < Route path="/:company">
                <CompanyDetails list={filteredCompanies} newObj={setNewObj} />
            </Route>
        </div>
    </Router>

}

export default Shipments;