import React, { useState, useEffect } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import SinglePlane from "./SinglePlane";

function Station({ name, id ,onReceiveMessage}) {
  const [planeName, setPlaneName] = useState("");
;

  useEffect(() => {
    // Create the SignalR connection with a lower log level
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7072/airport")
      .configureLogging(LogLevel.Error) // Set the log level to Error
      .build();

    const startConnection = async () => {
      try {
        await connection.start();
        console.log("SignalR is connected");
      } catch (error) {
        console.error("Error starting SignalR:", error);
      }
    };


    startConnection();
    connection.on(name, msg => {
      //console.log(msg)
      if (onReceiveMessage) {
        onReceiveMessage( name,msg); // Include the name parameter
      }
      
      
    });

    return () => {
      connection.stop()
        .then(() => console.log("SignalR is disconnected"))
        .catch(error => console.error("Error stopping SignalR:", error));
    };
  }, []);

  return (
    <div className='Station'>
      
    </div>
  );
}

export default Station;

