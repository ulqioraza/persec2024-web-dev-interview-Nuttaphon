import Image from "next/image";
import { useEffect, useState } from "react";

export default function HexToRgb() {
  const [hexadecimal, setHexadecimal] = useState('')
  const [rgb, setRGB] = useState('')
  

  const hexToRgb =(hex:string) => {
    hex   = hex.replace('#', '');
    var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);

    setRGB('rgb(' + r + ', ' + g + ', ' + b + ')')
    setHexadecimal(hex)
 }

  useEffect(() => {
    hexToRgb(hexadecimal);
  }, [hexadecimal]);

  
  return (
        <div className="w-[300px] h-[600px] border-2 pl-4">
          <div className="text-[24px]">Hexadecimal To RGB</div> 
          <div className="flex w-[300px] h-[30px] gap-2 mt-2">
            <input 
                type="text"
                value={hexadecimal}
                onChange={(e)=> setHexadecimal(e.target.value)}
                className="text-slate-800 w-[255px] "
            />
            {/*<button className="rounded-lg bg-amber-400 pl-4 pr-4 border-2" onClick={()=>hexToRgb(hexadecimal)}>PUSH</button>*/}
          </div>
          <div className={`w-[255px] h-[200px] flex justify-center py-20 mt-4 border-2 rounded-2xl`}
              style={{backgroundColor: '#' + hexadecimal}}>
            {rgb} 
          </div>   
        </div>

  );
}
