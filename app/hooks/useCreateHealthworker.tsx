
'use client'

import { useState } from "react";
import { createHealthworker } from "../utilities/utils";
import { useRouter } from "next/navigation";
import useGetChvs from "./useGetChvs";

interface HealthworkerData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  hospital: string;
  phone_number: string;
}

const useCreateHealthworker = () => {
  const [createdHealthworker, setCreatedHealthworker] = useState<HealthworkerData[] | object>([]);
  const router = useRouter();
  const chvs = useGetChvs();

  const handleRegister = async (healthworker: HealthworkerData) => {
    try {
      console.log("Registering healthworker:", healthworker);

      const response = await createHealthworker(healthworker);
      console.log("Registration response:", response);
      chvs.refetch();

      if (response.id) {
        chvs.refetch();
        router.push("/CHVRecords");
      }

      setCreatedHealthworker(response);
    } catch (error) {
      console.error("Error creating healthworker:", error);
    }
  };

  return { handleRegister, createdHealthworker };
};

export default useCreateHealthworker;