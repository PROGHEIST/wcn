// create react app using "npm create vite@latest exp5b -- --template react"
// then replace src/App.jsx with this code
// and run "npm install react-router-dom" to install the router package
// finally run "npm run dev" to start the development server

import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation (Router concept) */}
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}



function Home() {
  return <Greeting name="React Learner" />;
}

function Greeting({ name }) {
  return <h2>Hello, {name}! 👋</h2>;
}

function FormComponent() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) setItems([...items, value]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input ref={inputRef} placeholder="Enter item" />
        <button>Add</button>
      </form>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <p>
      This page demonstrates JSX, Components, Props, State, Forms, Events, Routers, Refs, and Keys.
    </p>
  );
}
