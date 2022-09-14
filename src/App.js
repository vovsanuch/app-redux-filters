import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {TheHeader} from "./components/TheHeader";
import {FilterPanel} from "./components/FilterPanel";
import {JobList} from "./components/JobList";
import {addPositions} from './store/positions/position-actions'
import data from './mock/data.json'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addPositions(data))
    })

  return (
      <>
          <TheHeader />
          <div className="App">
              <FilterPanel />
              <JobList/>
          </div>
      </>

  );
}

export default App;
