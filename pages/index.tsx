import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import HexToRgb from "@/components/hexToRgb";
import StringArraySort from "@/components/stringArraySort";
import ReverseEncoder from "@/components/reverseEncoder";
import AutoComplete from "@/components/autoComplete";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [stringArray, setStringArray] = useState<any[]>([])
  const [textStringSort, setTextStringSort] = useState('')
  const [textDecoder, setTextDecoder] = useState('')
  const [textEncoder, setTextEncoder] = useState('')
  const [search, setSearch] = useState('')
  const [maxResult, setMaxResult] = useState(stringArray.length)
  const [result, setResult] = useState<any[]>([])

 
  return (
    <main
      className={`p-24`}
    >
      <div className="flex justify-between">
        <HexToRgb/>
        <StringArraySort/>
        <ReverseEncoder/>
        <AutoComplete/>
      </div>
      
    </main>
  );
}
