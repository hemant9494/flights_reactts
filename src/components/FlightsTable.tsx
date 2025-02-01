import { getTableData } from "../api/fetchData";  
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
import { Route } from "react-router-dom";

export const ReactTable = () => {  
  const [flights, setData] = useState<IFlight[]>([]);

  useEffect(() => {  
    const fetchData = async () => {  
      const data  = await getTableData();  
      setData(data);  
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData()
    },5*1000);
    return () => clearInterval(interval);  
  }, []);

  const columns = useMemo(() => COLUMNS, []);


  const rowStyle :CSS.Properties ={color: "rgba(36, 16, 17)"}

  return (
    <ChakraProvider value={defaultSystem}>
        <Table.Root size="sm">
        <Table.Header>
            <Table.Row>
              {columns.map((column) => (
                <Table.ColumnHeader>{column.header}</Table.ColumnHeader>
              ))
              }
            </Table.Row>
        </Table.Header>
        <Table.Body>
          {flights.map((item) => (
            <Table.Row style={rowStyle}>
                  {columns.map((rowColumn) => (
                    <Table.Cell>
                      <LinkBox >
                        <LinkOverlay href = {"/"+item.id}>
                          {item[rowColumn.accessorKey as keyof IFlight]}
                        </LinkOverlay>
                      </LinkBox>
                    </Table.Cell>
                  ))}
            </Table.Row>
              ))}
            
        </Table.Body>
        </Table.Root>
    </ChakraProvider>
  );  
  
};