import "./App.css";
import Header from "./Header.js";
import Mainboard from "./Mainboard";
import unsplash from "./api/unsplash";
import { useState, useEffect } from "react";
import db from "./firebase";

function App() {
  const [pins, setNewPins] = useState([]);

  const makeAPICall = (term) => {
    //make an API call
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    // console.log(term, "which term is here ? OLA");
    let promises = [];
    let searchedPins = [];
    promises.push(
      makeAPICall(term).then((res) => {
        // console.log(res, "what is in res?");
        let results = res.data.results;
        results.map((pin) => {
          // console.log("what is in pin", pin);
          searchedPins.push(pin);
        });
      })
    );
    Promise.all(promises).then(() => {
      // console.log(searchedPins, "What is in searched pins?");
      setNewPins(searchedPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    db.collection("terms").onSnapshot((snapshot) => {
      let snapshotData = snapshot.docs;

      if (snapshotData.length >= 10) snapshotData = snapshotData.slice(-5);

      snapshotData.map((doc) => {
        promises.push(
          makeAPICall(doc.data().term).then((res) => {
            let results = res.data.results;
            results.map((obj) => {
              pinData.push(obj);
            });

            pinData.sort((a, b) => 0.5 - Math.random());
          })
        );
      });

      Promise.all(promises).then(() => {
        setNewPins(pinData);
      });
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  // console.log(pins, "what is in pins ?");
  return (
    <div className="app">
      <div className="app__header">
        <Header onSubmit={onSearchSubmit} />
      </div>
      <div className="app__body">
        <Mainboard pins={pins} />
      </div>
    </div>
  );
}

export default App;
