import { useState } from "react";
import BookCreate from "./Components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const createBook = (item) => {
    console.log(item);
  };

  return <BookCreate onCreate={createBook} />;
}

export default App;
