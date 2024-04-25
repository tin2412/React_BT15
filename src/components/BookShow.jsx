import BookEdit from "./BookEdit";
import BookContext from "../context/book";
import { useContext, useState } from "react";
const BookShow = ({book}) => {
    const {count, incrementCount, onEdit, onDelete } = useContext(BookContext);
   
    const image = `https://picsum.photos/seed/${book.id}/200/300`;  
    const [isEdit, setIsEdit] = useState(false)
    const handleEdit = (id, term) => {
        onEdit(id, term);
        setIsEdit(false);
    };
    return (
        <div className="item">
           {count}
           <button onClick={incrementCount}>Tang Count</button>
            <div className="image">
            <img src={image} alt="" />
            </div>
            <h2>
                {book.title}
            </h2>   
            <p>{book.des}</p>
            {isEdit && <BookEdit book={book} onEdit={handleEdit}/>}
            {
                !isEdit && (
            <>
            <button onClick={() => onDelete(book.id)}>Delete</button>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            </>
      )}
        </div>
    )
}
export default BookShow;