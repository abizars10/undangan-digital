import React from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import Countdown from "./components/Countdown";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  // Ambil nama dari query string
  const query = useQuery();
  const guestName = query.get("to");

  return (
    <div>
      <section className="hero">
        <main className="hero-text">
          <h4>WEDDING INVITATION</h4>
          <h1>FULAN & FULANAH</h1>
          <h4>01 Oktober 2025</h4>
          <p>Kepada Yth :</p>
          <h4>{guestName ? `${decodeURIComponent(guestName.replace(/\+/g, " "))}` : " "}</h4>
          {/* <p>Kami akan melangsungkan resepsi pernikahan dalam : </p>
          <Countdown /> */}
          <a href="#" className="btn">
            Lihat Undangan
          </a>
          <p>* Mohon Maaf Apabila Ada Kesalahan Penulisan Nama/Gelar</p>
        </main>
      </section>
    </div>
  );
}

export default App;
