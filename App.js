import React from "react";
import Router from "./src/Routes";
import { AuthProvider } from "./src/Providers/auth";

export default function App(){
    return(
        <AuthProvider>
            <Router/>
        </AuthProvider>
    )
}