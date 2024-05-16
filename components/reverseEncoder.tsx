import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReverseEncoder() {
  const [textDecoder, setTextDecoder] = useState('')
  const [textEncoder, setTextEncoder] = useState('')

  const ReverseEncoder = (string: string) => {
    var code: { [key: string] : string } = 
              { "a": "z", "A": "Z", "b": "y", 
                "B": "y", "c": "x", "C": "X", 
                "d": "w", "D": "W", "e": "v", 
                "E": "V", "f": "u", "F": "U", 
                "g": "t", "G": "T", "h": "s", 
                "H": "S", "i": "r", "I": "R", 
                "j": "q", "J": "Q", "k": "p", 
                "K": "P", "l": "o", "L": "O", 
                "m": "n", "M": "N", "n": "m", 
                "N": "M", "o": "l", "O": "L", 
                "p": "k", "P": "K", "q": "j", 
                "Q": "J", "r": "i", "R": "I", 
                "s": "h", "S": "H", "t": "g", 
                "T": "G", "u": "f", "U": "F", 
                "v": "e", "V": "E", "w": "d", 
                "W": "D", "x": "c", "X": "C", 
                "y": "b", "Y": "B", "z": "a", 
                "Z": "A"};
    
    setTextEncoder(Array.from(string, c => code[c] || c).join(''))
  }

  return (
    <div className="w-[300px] h-[600px] border-2 pl-4">
        <div className="text-[24px]">Reverse Encoder</div>
            <div className="flex w-[300px] h-[30px] gap-2 mt-2">
              <input 
                  type="text"
                  value={textDecoder}
                  onChange={(e)=> setTextDecoder(e.target.value)}
                  className="text-slate-800 w-[140px] "
              />
              <button className="rounded-lg bg-amber-400 pl-4 pr-4 border-2" 
                      onClick={()=>ReverseEncoder(textDecoder)}>
                      ENCODER
              </button>
            </div>
            <div className={`w-[255px] h-[200px] px-2 justify-center py-20 mt-4 border-2 rounded-2xl`}>
              {textEncoder}
            </div> 
        </div>
  );
}
