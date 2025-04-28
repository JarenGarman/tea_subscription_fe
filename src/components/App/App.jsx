import { Link, NavLink, Route, Routes, useMatch } from "react-router";
import Details from "../Details/Details";
import Home from "../Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <header>
          <nav>
            <NavLink to="/">
              <h1 data-cy="title">Tea Subscriptions</h1>
            </NavLink>
            {useMatch("/:id") && (
              <Link to="/" data-cy="home">
                ⌂
              </Link>
            )}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
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
