
import { useEffect, useState } from "react";
import { getRegionRates } from "@/app/utilities/utils";
interface RegionData {
    region_name: string;
    total_children: number;
    immunized_children: number;
    immunization_rate: number;
    longitude: number; 
    latitude: number;
  };


const useGetRegionRates = ()=>{
  const [regionRates, setRegionRates] = useState<RegionData[]>([]);
  useEffect(()=>{
      (async()=>{      
      const regionRate = await getRegionRates();
      setRegionRates(regionRate);
      console.log('Filtered CHVs:', regionRate);
    })();
  },[])
  return {regionRates}
}
export default useGetRegionRates;