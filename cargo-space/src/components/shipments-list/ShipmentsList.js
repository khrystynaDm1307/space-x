import React from "react";
import { Link } from "react-router-dom";
import "./shipmentsList.css"

function ShipmentsList(props) {

  return <ul className="list">{props.list.map(el => (
    <Link key={el.id} to={el.name.replace(" ", "-")}>
      <li>
        {el.name}
      </li>
    </Link>
  ))}
  </ul>;

}

export default ShipmentsList;