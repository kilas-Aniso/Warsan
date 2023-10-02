
export const getLocations = async ()=>{
    const url = '/api/get-locations';
    try{
        const response = await fetch (url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
}
// export const getRegionRates = async ()=>{
//     const url = '/api/get-region-rates';


export const getChildRecords = async ()=>{
    const url = '/api/get-child-records';


    try{
        const response = await fetch (url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
}


export const getVaccines = async ()=>{
    const url = '/api/get-vaccines';

    try{
        const response = await fetch (url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
}



// export const getLocations = async ()=>{
//     const url = '/api/get-locations';

//     try{
//         const response = await fetch (url);
//         const result = await response.json();
//         return result
//     }
//     catch(error:any){
//         return error.message
//     }
// }


// export const getChildRecords = async ()=>{
//     const url = './api/get-child-records';

export const getRegionRates = async ()=>{
    const url = '/api/get-region-rates';

    try{
        const response = await fetch (url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
}
interface UsersData {
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }
  
  export const createUser = async (userData: UsersData) => {
    const url = `/api/create-user`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };


  

  interface LoginData {
    username: string;
    password: string;
}
export const loginUser = async (loginData: LoginData) => {
    const url = 'api/login-user';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };

  export const getChvs = async ()=>{
    const url = './api/get-chvs';

    try{
        const response = await fetch (url);
        const result = await response.json();
        return result
        

    }
    catch(error:any){
        return error.message
    }
}

interface healthworkerData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  hospital: string;
  phone_number: string;
}



  
export const createHealthworker = async (userData: UsersData) => {
    const url = `/api/create-healthworker`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };
