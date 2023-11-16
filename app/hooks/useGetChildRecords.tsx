'use client'

import { useEffect, useState } from "react";
import { getChildRecords } from "@/app/utilities/utils";

type VaccineAdministration = {
  vaccine: number;
  date_of_administration: string;
  vaccine_choice:string;
};

type ChildData = {
  is_immunized: unknown;
  id: number;
  vaccineadministration_set: VaccineAdministration[];
  child_first_name: string;
  child_last_name: string;
  child_date_of_birth: string;
  child_location: string;
  child_phone_number: string;
  status: string;
  next_date_of_administration: string;
  child: number;
};

const useGetChildRecords = () => {
  const [child, setChild] = useState<ChildData[]>([]);

  useEffect(() => {
    (async () => {
      const children = await getChildRecords();
      setChild(children);
    })();
  }, []);

  return { child };
};

export default useGetChildRecords;
