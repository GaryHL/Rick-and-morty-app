import React from "react";

function CharacterCard({ character }) {
  console.log(character);
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="0"
      className="p-4  shadow-lg glass transition-all flex flex-col gap-4 mt-24 rounded-xl border border-gray-500 bg-gray-500 bg-opacity-20 backdrop-blur-md"
    >
      <div className=" -mt-20 w-8/12 self-center relative">
        <img
          src={character?.image}
          alt="character"
          className="rounded-full w-full  border-2 z-100 "
        />
        <img
          src={character?.image}
          alt="character"
          className="rounded-full w-full  border-2 absolute blur-[10px] top-0 scale-105 z-10 opacity-[0.3]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3>
          <strong>Name:</strong> {character?.name}
        </h3>
        <p>
          <strong>Status:</strong> {character?.status}
        </p>
        <p>
          <strong>species:</strong> {character?.species}
        </p>
        <p>
          <strong>Gender:</strong> {character?.gender}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
