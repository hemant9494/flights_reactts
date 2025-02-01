export interface IFlight {  
    id: number;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: string; //TODO: handle date
    status:string;  
  }