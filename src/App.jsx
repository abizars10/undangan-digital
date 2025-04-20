import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  // Ambil nama dari query string
  const query = useQuery();
  const guestName = query.get("to");

  return (
    <div>
      <h1>{guestName ? `Selamat datang, ${decodeURIComponent(guestName.replace(/\+/g, " "))}!` : "Selamat datang di undangan digital!"}</h1>
    </div>
  );
}

export default App;
