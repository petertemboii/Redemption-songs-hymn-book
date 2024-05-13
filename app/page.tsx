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
    <div className="pb-20">
      <div>
        <SearchBox
          placeholder="Search by number"
          searchChange={onSearchChange}
        />
      </div>
      <div className="flex justify-center">
        {searchNumber === "" ? (
          <h1 className="font-bold text-lg text-wrap">
            Welcome to Redemption Songs hymn book
          </h1>
        ) : (
          filteredSongs.map((song) => (
            <div key={song.number}>
              <div key={song.number}>
                <h1 className="font-bold text-lg text-wrap">
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
