
'use client'

import { useEffect, useState } from "react";
import { getChvs } from "@/app/utilities/utils";

interface ChvData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  hospital :string
}

const useGetChvs = ()=>{
  const [chvs, setchvs] = useState<ChvData[]>([]);
  const [refetchData, setRefetchData] = useState(false);
  useEffect(()=>{
    (async()=>{
      const chvs = await getChvs();
      setchvs(chvs);
      console.log('Filtered CHVs:', chvs);

    })();
  },[refetchData])

  return {chvs,
  
  refetch:()=>setRefetchData(!refetchData)}
}

export default useGetChvs;