import "./booksData.css";
import { useContext } from "react";
import { someContext } from "../../context/BooksProvider.component";


export default function BooksData() {
    const {some-state-that-passed-on-via-provider-value} = useContext(someContext)
        return ( 
        <div>
            <h1>{some-state-that-passed-on-via-provider-value}</h1>
        </div>
     );
}