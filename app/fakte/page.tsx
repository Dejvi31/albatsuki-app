"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const facts = [
  "Animeja e parë u bë në vitin 1917.",
  "Spirited Away fitoi një Çmim të Akademisë.",
  "Ushqimi i preferuar i Narutos është ramen.",
  "One Piece është manga më e shitur në histori.",
  "Attack on Titan bazohet në qytetin e lindjes së Hajime Isayama.",
];

const Fakte = () => {
  const [fact, setFact] = useState<string>("");

  // Function to generate a random fact
  const generateFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative bg-white rounded-full shadow-lg p-8 flex items-center justify-center w-96 h-96">
        <div className="absolute inset-0 bg-white rounded-full shadow-lg"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {fact ? (
            <p className="text-xl font-bold mb-4">{fact}</p>
          ) : (
            <>
              <p className="text-xl font-bold mb-4">Gjenero faktin e ditës!</p>
              <Button
                onClick={generateFact}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Gjenero faktin
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fakte;
