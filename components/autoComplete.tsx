import Image from "next/image";
import { useEffect, useState } from "react";

export default function AutoComplete() {
  const [textStringSort, setTextStringSort] = useState('')
  const [stringArray, setStringArray] = useState<any[]>([])
  const [search, setSearch] = useState('')
  const [maxResult, setMaxResult] = useState(stringArray.length)
  const [result, setResult] = useState<any[]>([])

  const pushStringToArray = (text:string) => {
    stringArray.push(text)
    setStringArray([...stringArray])
    setTextStringSort('')
  }

  const AutoComplete = (search:string, maxResult:number) => {
    setResult(stringArray.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.toLowerCase().indexOf(search.toLowerCase()) - b.toLowerCase().indexOf(search.toLowerCase())))
    console.log()
  }

  useEffect(() => {
    AutoComplete(search, maxResult);
  }, [search, maxResult]);

  const ResetArray = () =>{
    stringArray.length = 0
    setStringArray([...stringArray])
  }

  return (
    <div className="w-[300px] h-[600px] border-2 pl-4">
        <div className="text-[24px]">AutoComplete</div>
            <div className=" w-[300px] h-[30px] gap-2 mt-2">
              <div className="flex gap-2">
                Search :
              <input 
                  type="text"
                  value={search}
                  onChange={(e)=> setSearch(e.target.value)}
                  className="text-slate-800 w-[180px] "
              />
              </div>
              
              <input 
                  type="text"
                  value={textStringSort}
                  onChange={(e)=> setTextStringSort(e.target.value)}
                  className="text-slate-800 w-[180px] mt-4"
              />
              <button className="rounded-lg bg-amber-400 pl-4 pr-4 border-2 ml-2" 
                      onClick={()=>pushStringToArray(textStringSort)}>
                      PUSH
              </button>
              <div className="flex gap-2 mt-4">
                MaxResult :
                <input 
                    type="number"
                    value={maxResult}
                    onChange={(e)=> setMaxResult(parseInt(e.target.value))}
                    className="text-slate-800 w-[50px] "
                />
              </div>
            </div>
            <div className={`flex w-[255px] h-[200px] px-2 mt-[100px] border-2 rounded-2xl`}>
              <div className="">
                
              {stringArray.map((val, key) => (
                <div key={key}>
                {val}
               </div>
              ))} 
              </div>
            </div>
            {result.map((val, key) => (
              key < maxResult ?
             <div key={key}>
              {val}
             </div>
             :""
            ))} 
            <button className="rounded-lg bg-red-400 pl-4 pr-4 border-2 mt-4 ml-[90px]" 
                    onClick={()=>ResetArray()}>
                    RESET
            </button>
        </div>
        
  );
}
