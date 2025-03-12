import React from "react"
import Layout from "./Layout"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { DetailPage, MainPage } from "./pages"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/detail" element={<DetailPage />} />
            </Route>
        </Routes>
    )
}

export default App
