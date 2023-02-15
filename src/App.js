import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routes from "./routes";
import { setCountries } from "./features/countries/countriesSlice";
import { fetchData } from "./utils/fetcher";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData("https://restcountries.com/v3.1/all").then((res) =>
      dispatch(setCountries(res))
    );
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
