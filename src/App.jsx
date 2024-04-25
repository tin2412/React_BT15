import BookCreate from "./components/BookCreate";
import Booklist from "./components/Boolist";
import {  useEffect } from "react";
import useBookContext from "./hook/useBookContext";
import "./app.css";

const App = () => {
   const {getAllBooks} = useBookContext();
    useEffect(async () => {
        await getAllBooks();
    }, []);
    return (
     
        <div className="wrapper">
            <div className="container">
                <h1 className="text">READING BOOK</h1>
                <div className="window">
                    <Booklist />
                </div>
            </div>
            <BookCreate  />
        </div>
       
    );
};
export default App;