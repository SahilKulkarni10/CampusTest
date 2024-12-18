// import { createContext, useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { AuthContext } from "./AuthContext";

// export const SocketContext = createContext();

// export const SocketContextProvider = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     setSocket(io("http://localhost:4000"));
//   }, []);

//   useEffect(() => {
//   currentUser && socket?.emit("newUser", currentUser.id);
//   }, [currentUser, socket]);

//   return (
//     <SocketContext.Provider value={{ socket }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };



import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Dynamically set the Socket.IO server URL based on the environment
    const SOCKET_URL =
      window.location.hostname === "localhost"
        ? "http://localhost:4000" // Local development
        : "https://campus-test-zz76.vercel.app"; // Production

    // Initialize Socket.IO
    const newSocket = io(SOCKET_URL, {
      withCredentials: true, // Enable cookies for cross-origin requests
    });

    setSocket(newSocket);

    // Clean up the socket on component unmount
    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    // Emit "newUser" when currentUser is available
    if (currentUser && socket) {
      socket.emit("newUser", currentUser.id);
    }
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
