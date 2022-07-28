import React from "react";
import { Routes, Route } from "react-router-dom";
import Test01 from "../page/Test01";
import Test02 from "../page/Test02";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Test01 />}></Route>
                <Route path="/02" element={<Test02 />}></Route>
            </Routes>
        </>
    );
}

export default Router;
