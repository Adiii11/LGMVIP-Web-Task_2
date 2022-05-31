import "./App.css";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
export default function App() {
    // useEffect(() => {
    //   loadUsers();
    // }, []);
    const [users, setUsers] = useState([]);
    // let users;
    const loadUsers = async() => {
        console.log("before");
        const response = await fetch("https://reqres.in/api/users?page=1%22");
        const jsonResponse = await response.json();
        const data = jsonResponse.data;
        console.log(data);
        setUsers(data);
        // users = await jsonResponse;
    };

    return ( <
        div className = "App" >
        <
        h2 > Task 2 < /h2> <
        button onClick = { loadUsers } > Get Users! < /button> <
        Cards users = { users }
        /> < /
        div >
    );
}