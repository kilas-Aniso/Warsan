'use client'
import { useEffect, useState } from "react";
import { getVaccines } from "@/app/utilities/utils";

interface VaccineData {
  id: number;
  vaccineadministration_set: {
    vaccine: number;
    date_of_administration: string;
  }[];
}

const useGetVaccines = () => {
  const [vaccines, setVaccines] = useState<VaccineData[]>([]);

  useEffect(() => {
    (async () => {
      const vaccine = await getVaccines();
      setVaccines(vaccine);
      console.log('Filtered CHVs:', vaccine);
    })();
  }, []);

  return { vaccines };
};

export default useGetVaccines;
