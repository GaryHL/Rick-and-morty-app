import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import stars from "../assets/stars.gif";
import { AiFillCloseCircle } from "react-icons/ai";
import {BiSolidTrash} from "react-icons/bi";

const apiUrl = import.meta.env.VITE_REACT_APP_RICK_AND_MORTY_API_URL;

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  async function getAllCharacters() {
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await axios.get(`${apiUrl}/character?page=${page}`);
      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error al cargar más personajes", error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = input.toLowerCase();
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCharacters(filtered);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  return (
    <>
      <div className="w-full flex justify-center gap-2 py-10">
        <form
        data-aos="fade-up"
          onSubmit={(e) => handleSearch(e)}
          className="  x  w-full md:w-1/2 flex flex-row rounded-xl border border-gray-500 bg-gray-500 bg-opacity-20 backdrop-blur-xl"
        >
          <input
            type="text"
            className=" w-full bg-transparent  text-white px-4 focus:outline-none "
            placeholder="Buscar por nombre"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
          />
          <div className={`h-full flex justify-centeri items-center px-4 ${input ==="" && " hidden"}`}><BiSolidTrash onClick={(e) => {getAllCharacters(),setInput("")}} className=" text-lg  cursor-pointer animate-pulse hover:animate-none hover:scale-110 active:scale-100 transition-all"/></div>
          <button
            type="submit"
            className={`px-4 py-2 bg-white text-black border w-2/12 rounded-r-xl ${
              input.length <= 0 && " opacity-50 cursor-not-allowed "
            }`}
          >
            Buscar
          </button>
        </form>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4  min-h-[15vh]">
        {filteredCharacters.length > 0 ? (
          filteredCharacters?.map((character, index) => {
            return <CharacterCard key={index} character={character} />;
          })
        ) : (
          <div className="w-full flex flex-col items-center gap-4 justify-center col-span-full">
            <img src={stars} alt="stars_waiting" className="w-20 h-20"></img>
            <p className="w-full text-center md:col-start-3 italic">
              There are no characters matching your search, please try again.
              again.
            </p>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center items-center my-10">
        {input === "" && (
          <button
            className="px-8 py-2 rounded-full border m-auto hover:scale-110 hover:text-black hover:bg-white transition-all"
            onClick={getAllCharacters}
            disabled={loading}
          >
            {loading ? "Loading..." : "More..."}
          </button>
        )}
      </div>
    </>
  );
}

export default Characters;
