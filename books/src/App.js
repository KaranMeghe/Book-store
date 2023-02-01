import { useState } from "react";
import BookCreate from "./Components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  // Create a Book
  const createBook = (title) => {
    console.log("Title:", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
