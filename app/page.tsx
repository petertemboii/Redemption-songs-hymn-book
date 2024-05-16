"use client";

import React, { useState, ChangeEvent } from "react";
import songs from "../constants/songs";
import SearchBox from "../components/SearchBox";

export default function Home() {
  const [searchNumber, setSearchNumber] = useState("");

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchNumber(event.target.value);
  };

  const filteredSongs =
    searchNumber.trim() !== ""
      ? songs.filter((song) => song.number.toString() === searchNumber)
      : [];

  return (
    <div className="flex flex-col pb-20 items-center justify-center">
      <div>
        <SearchBox
          placeholder="Search by number"
          searchChange={onSearchChange}
        />
      </div>
      <div className="flex justify-center items-center flex-1  w-fit rounded-[20px] shadow-2xl px-10 py-7">
        {searchNumber === "" ? (
          <h1 className="font-bold text-lg justify-center text-center">
            Welcome to <span className="text-red-600">Redemption</span> Songs
            hymn book
          </h1>
        ) : (
          filteredSongs.map((song) => (
            <div key={song.number}>
              <div key={song.number}>
                <h1 className="font-bold text-xl text-wrap text-red-600">
                  {song.number} {song.title}
                </h1>
                {song.verses.map((verse, index) => (
                  <p key={index} className="text-center">
                    {verse}
                  </p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
