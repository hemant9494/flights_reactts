import { FLIGHTS_URL } from "../utils/constants";

export const getTableData = async () => {

  const response = await
    fetch(FLIGHTS_URL)
    .then((res) => {
      return res.json();
    });
    
    return response;
  };


export const getFlightData = async (id: string) => {
  
  const response = await
    fetch(FLIGHTS_URL+"/"+id)
    .then((res) => {
      return res.json();
    });
    return response;
  };


