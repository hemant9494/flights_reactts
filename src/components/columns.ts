import { ColumnDef } from "@tanstack/react-table";  
import { IFlight } from "../utils/flight";
import { IColumn } from "../utils/column";

export const COLUMNS: IColumn[] = [  
  {  
    header: "ID",  
    accessorKey: "id",  
  },  
  {  
    header: "Flight Number",  
    accessorKey: "flightNumber",  
  },  
  {  
    header: "Airline",  
    accessorKey: "airline",  
  },  
  {  
    header: "Origin",  
    accessorKey: "origin",  
  },  
  {  
    header: "Destination",  
    accessorKey: "destination",  
  },  
  {  
    header: "Departure Time",  
    accessorKey: "departureTime",  
    // cell: (info) => {  
    //   const value = (info.getValue() as string).substring(0,10)  
    //   return value  
    // }  
  },
  {  
    header: "Status",  
    accessorKey: "status",  
  },  
];