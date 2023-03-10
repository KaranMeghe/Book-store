import { useEffect } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import useBooksContext from "./hooks/use-book-contex";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
