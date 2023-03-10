import { BrowserRouter, Route, Routes } from "react-router-dom"
import { JogoDaVelha } from "../Pages/jogoDaVelha"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<JogoDaVelha />} />
            </Routes>
        </BrowserRouter>
    )
}