import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "pages/Home/home";
import Book from "pages/Book/book";
import Lending from "pages/Lending/lending";
import NotFound from "pages/notfound";
import Login from "pages/Auth/login";
import Profile from "pages/Profile/profile";


export default function App() {
	return (
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/books/" element={<Book />}></Route>
                <Route path="/lendings/" element={<Lending />}></Route>
                <Route path="/login/" element={<Login />}></Route>
                <Route path="/profile/" element={<Profile />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
	);
}
