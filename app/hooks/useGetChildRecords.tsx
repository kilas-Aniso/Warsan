'use client'

import { useEffect, useState } from "react";
import { getChildRecords} from "@/app/utilities/utils";
interface Vaccine {
  id: number;
  vaccine_choice: string;
}
type ChildData = {
    is_immunized: unknown;
    child_first_name: string;
    child_last_name: string;
    child_date_of_birth: string;
    child_location: string;
    child_phone_number: string;
    hospital: string;
    guardian_name: string;
    vaccines: Vaccine[];
  };
const useGetChildRecords = ()=>{
  const [child, setChild] = useState<ChildData[]>([]);
  useEffect(()=>{
    (async()=>{
      const children = await getChildRecords();
      
      setChild(children);
    })();
  },[])
  return {child}
}
export default useGetChildRecords;