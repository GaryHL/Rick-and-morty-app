import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlinePaperClip,
} from "react-icons/ai";
function Hero() {
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_RICK_AND_MORTY_API_URL}/character`
        );
        const characters = response.data.results;
        const randomCharacters = getRandomCharacters(characters, 4);
        const images = randomCharacters.map((character) => character.image);
        setHeroImages(images);
      } catch (error) {
        console.error("Error al obtener las imágenes del héroe", error);
      }
    };

    fetchHeroImages();
  }, []);

  const getRandomCharacters = (characterList, count) => {
    const shuffled = characterList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <header className="flex gap-8 flex-col relative justify-center items-center w-full my-12 min-h-[60vh]">
      <div className="absolute h-full gap-6 z-10 max-w-full grid grid-cols-4">
        {heroImages.map((image, index) => (
          <div
            className="h-full w-full relative"
            data-aos-delay="300"

            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
          >
            <img
              key={index}
              src={image}
              className="h-full w-full object-cover  absolute blur-[10px] opacity-100 "
              alt={`Hero Image ${index}`}
            />
            <img
              key={index}
              src={image}
              className="h-full w-full object-cover opacity-30 "
              alt={`Hero Image ${index}`}
            />
          </div>
        ))}
        <div className="w-full h-full bg-black absolute scale-x-125 scale-y-110 opacity-80"></div>
      </div>
      <div className="flex flex-col z-10">
        <div className="flex flex-col gap-6" 
        data-aos="fade-up"
        data-aos-delay="800"
        >
          <h1 className="text-4xl md:text-6xl font-bold ">
            RICK AND MORTY APP{" "}
          </h1>
          <p className="">
            This is Gary Lima's project to participate in the
            <a
              href="https://jump2digital.site/"
              target="_blank"
              className=" text-primary font-medium ml-2"
            >
              Jum2Digital 2023 hackathon.
            </a>
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://garylima.online"
              target="_blank"
              className=" flex gap-2 items-center self-start border white px-4 py-2 rounded-full hover:scale-110 active:scale-100 transition-all hover:bg-white hover:text-black"
            >
              My portfolio <AiOutlinePaperClip />
            </a>
            <div className="flex gap-4 flex-row">
              <a href="https://github.com/GaryHL" target="_blank">
                <AiFillGithub className="text-2xl  cursor-pointer hover:scale-110  active:scale-100 transition-all" />
              </a>
              <a href="https://www.linkedin.com/in/gary-hl/" target="_blank">
                <AiFillLinkedin className="text-2xl  cursor-pointer hover:scale-110 active:scale-100 transition-all" />
              </a>
              <a href="https://www.instagram.com/gary.trip" target="_blank">
                <AiFillInstagram className="text-2xl  cursor-pointer hover:scale-110 active:scale-100 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
