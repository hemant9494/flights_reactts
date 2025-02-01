import { getFlightData } from "../api/fetchData";  
import { useState, useEffect, useMemo } from "react";  
import { IFlight } from "../utils/flight";
import { COLUMNS } from "./columns";
import { FLIGHTS_URL } from "../utils/constants";
// "use client";
import {  
    ChakraProvider,
    defaultSystem,
    LinkBox,
    LinkOverlay,
    Table
  } from "@chakra-ui/react";
import CSS from "csstype";
import { useParams } from "react-router-dom";

export const FlightDetail = () => {  
  const [flightParams, setData] = useState(
    {"id":0,"flightNumber":"--","airline":"--","origin":"--","destination":"--","departureTime":"2025-01-31T17:48:36.393Z","status":"--"}
  );
  const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {  
              const data  = await getFlightData(id!);  
              setData(data);  
            };
            fetchData();
            const interval = setInterval(() => {
                fetchData()
              },2*1000);
              return () => clearInterval(interval);
        // getFlightData(id!)
        //     .then(setData);

        }, [id]);

  const columns = useMemo(() => COLUMNS, []);

  const rowStyle :CSS.Properties ={color: "rgba(36, 16, 17)"}

  return (
    <ChakraProvider value={defaultSystem}>
        <Table.Root size="sm">
        <Table.Header>
            <Table.Row>
              
                <Table.ColumnHeader>Parameter</Table.ColumnHeader>
                <Table.ColumnHeader>Parameter State</Table.ColumnHeader>

            </Table.Row>
        </Table.Header>
        <Table.Body>
            {columns.map((rowColumn) => (
                <Table.Row style={rowStyle}>
                    <Table.Cell>
                        {rowColumn.header}
                    </Table.Cell>
                    <Table.Cell>
                        {flightParams![rowColumn.accessorKey as keyof IFlight]}
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
        </Table.Root>
        <div className="end">
          *Flight details are updated every <code>2nd second</code>
        </div>
    </ChakraProvider>
  );  
  
};