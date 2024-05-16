import Image from "next/image";
import { useEffect, useState } from "react";

export default function StringArraySort() {
  const [stringArray, setStringArray] = useState<any[]>([])
  const [textStringSort, setTextStringSort] = useState('')

  const pushStringToArray = (text:string) => {
    stringArray.push(text)
    setStringArray([...stringArray])
    setTextStringSort('')
  }

  const ResetArray = () =>{
    stringArray.length = 0
    setStringArray([...stringArray])
  }

  const sortArray = () => {
    setStringArray([...stringArray.sort((a, b) => parseInt(b.substring(2,3)) - parseInt(a.substring(2,3)))])
    console.log(stringArray.sort((a, b) => parseInt(b.substring(2,3)) - parseInt(a.substring(2,3))))
  }

  return (
        <div className="w-[300px] h-[600px] border-2 pl-4">
          <div className="text-[24px]">String Array Sort</div>
            <div className="flex w-[300px] h-[30px] gap-2 mt-2">
              <input 
                  type="text"
                  value={textStringSort}
                  onChange={(e)=> setTextStringSort(e.target.value)}
                  className="text-slate-800 w-[180px] "
              />
              <button className="rounded-lg bg-amber-400 pl-4 pr-4 border-2" 
                      onClick={()=>pushStringToArray(textStringSort)}>
                      PUSH
              </button>
            </div>
            <div className={`w-[255px] h-[200px] px-2 justify-center py-20 mt-4 border-2 rounded-2xl`}>
              {JSON.stringify(stringArray)}
              <div className="ml-[80px] mt-8">
                <button className="bg-blue-400 px-4 rounded-lg"
                        onClick={()=>sortArray()}>SORT</button>
              </div> 
            </div> 
            <button className="rounded-lg bg-red-400 pl-4 pr-4 border-2 mt-4 ml-[90px]" 
                    onClick={()=>ResetArray()}>
                    RESET
            </button>
          </div>
        
  );
}
