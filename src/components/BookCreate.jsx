import { useState} from "react";
import "./bookcreate.css";
import useBookContext from "../hook/useBookContext";
const BookCreate = () => {
    const [title, setTitle] = useState ("title");
    const [des, setDes] = useState ("Description");
    const {onCreate} = useBookContext();
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
     };
     const handleChangeDes = (e) => {
        setDes(e.target.value);
     };
     const handleSubmit = async (event) => {
         event.preventDefault();
       const reps = await 
         onCreate({
            title,
            des,
        })
      console.log(reps);
     };
    return (
        <div className="form-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>

                    <label htmlFor="">Title</label>
                    <input className="form-input1" onChange={handleChangeTitle} type="text" id="title" name="title" />
                    <input className="form-input1" onChange={handleChangeDes} type="text" id="des" name="des" />
                    <input className="form-input2" type="submit" value="Create!" />
               
            </form>
        </div>
    )
}

export default BookCreate