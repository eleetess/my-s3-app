import { useState, useEffect } from "react";
import "./App.css";
import { api } from "./api";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    api
      .get("/memes")
      .then(function (response) {
        // handle success
        console.log(response);
        setMemes(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <header className="mb-2">
        <h1 className="font-bold text-4xl">My-s3-APP</h1>
      </header>

      <main className="min-h-[100vw]">
        <h2>Meme Gallery</h2>
        <p>Testing</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {memes.map((meme) => (
            <div
              key={meme.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={meme.imageUrl}
                alt={meme.title}
                className="rounded-lg w-full h-64 object-cover"
              />
              <h2 className="text-xl font-semibold mt-3 text-center">
                {meme.title}
              </h2>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center">&copy; EleeTess</footer>
    </>
  );
}

export default App;
