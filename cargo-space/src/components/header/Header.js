import React from "react";
import Button from "../button/Button";
import "./header.css"
import { useState,useEffect } from "react";

function Header(props) {

  function filter(e) {
    const newList = props.companies.filter(function (el) {
      return el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    props.filterFunc(newList)
  }
  const [companies, setCompanies] = useState();

  useEffect(() => {
    const getCompanies = async () => {
      const companiesFromServer = await fetchCompanies();
      setCompanies(companiesFromServer);
    }

    getCompanies()
  }, [])

  const fetchCompanies = async () => {
    const res = await fetch("http://localhost:3000/companies");
    const data = await res.json()
    return data;
  }
  
  function load() {
    props.filterFunc(companies)
  }

  function save() {

    let localData = localStorage.getItem("company")

    if (localData) {
      localData=JSON.parse(localData)
    }
    else{
      localData=[]
    }

    localData.push(props.newObj)
    localStorage.removeItem("company")
    localStorage.setItem("company", JSON.stringify(localData))

  }

  return <>
    <div className="mb-3">
      <h1>Cargo</h1>
      <input type="text" onChange={filter} className="form-control"></input>
      <Button name="Load" class="btn btn-primary" click={load} />
      <Button name="Save" class="btn btn-warning" click={save} />
    </div>
  </>

}

export default Header;



