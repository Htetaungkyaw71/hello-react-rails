import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

function Greeting (){
    return (
        <h1>Greeting</h1>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Greeting />}/>
    )
  );

export function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )   
}