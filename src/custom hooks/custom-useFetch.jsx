import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);  //data state - initialize to null cus not all data are the same (can be-{}/[])
  const [loading, setLoading] = useState(false);  //loading state - holds if data is still loading
  const [error, setError] = useState(null);  //error state - holds any error that occur during the request

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);  //no matter success/error -set to false after the promises is resolved
      });
  }, [url]); //url dependency in case it changes request new data

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //return the three states of the hook- via obj that contain the states
  return { data, loading, error, refetch };
}

//use test => 
// import "./App.css";
// import useFetch from "./useFetch";

// export default function Try() {
//   const { data: joke, loading, error, refetch } = useFetch(
//     "https://v2.jokeapi.dev/joke/Any"
//   );

//   if (loading) return <h1> LOADING...</h1>;

//   if (error) console.log(error);

//   return (
//     <div className="App">
//       <h1>
//         {joke?.setup} : {joke?.delivery}
//       </h1>

//       <button onClick={refetch}> Refetch</button>
//     </div>
//   );
// }