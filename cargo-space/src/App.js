import './App.css';
import Shipments from './components/shipments/Shipments';
import Window from './components/Window/Window';
import { useState, useEffect } from "react";

function App() {

  const localData = JSON.parse(localStorage.getItem("company"))
  const [companies, setCompanies] = useState();
  const [state, setstate] = useState(false)

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
  
  if (localData) {
    return <Shipments companies={localData} />
  }
  else {
    if (state) {
      return <Shipments companies={companies} />
    }
    else {
      return <Window load={setstate} />
    }

  }

}

export default App;
