import { useState } from "react";
import { Link, Route, Routes, useMatch } from "react-router";
import Details from "../Details/Details";
import Home from "../Home/Home";
import "./App.css";

function App() {
  const sortOptions = ["Default", "Price: High to Low", "Price: Low to High"];
  const [sort, setSort] = useState(sortOptions[0]);

  return (
    <>
      <main>
        <header>
          <Link to="/">
            <h1 data-cy="title">Tea Subscriptions</h1>
          </Link>
          <nav>
            {useMatch("/subscriptions/:id") && (
              <Link to="/">
                <h1 data-cy="home">⌂</h1>
              </Link>
            )}
          </nav>
          {useMatch("/") && (
            <div className="sort-container">
              <label data-cy="sort-label">Sort by: </label>
              <select
                onChange={(e) => setSort(e.target.value)}
                defaultValue={sort}
                data-cy="sort-select"
              >
                {sortOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
          )}
        </header>

        <Routes>
          <Route index element={<Home sort={sort} />} />
          <Route path="/subscriptions/:id" element={<Details />} />
          <Route
            path="*"
            element={
              <section className="error-message" data-cy="error-message">
                <h2>404: This page doesn't exist</h2>
                <p>Sorry, the route you're trying to visit is invalid</p>
                <Link to="/">Go back home</Link>
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
