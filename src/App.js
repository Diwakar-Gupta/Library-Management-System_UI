import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "pages/Home/home";
import BookList from "pages/Book/list";
import BookDetail from "pages/Book/detail";
import LendingList from "pages/Lending/list";
import LendingDetail from "pages/Lending/detail";
import NotFound from "pages/notfound";
import Login from "pages/Auth/login";
import Profile from "pages/Profile/profile";


export default function App() {
	return (
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/books/" element={<BookList />}></Route>
                <Route path="/book/:isbn/" element={<BookDetail />}></Route>
                <Route path="/lendings/" element={<LendingList />}></Route>
                <Route path="/lending/:pk/" element={<LendingDetail />}></Route>
                <Route path="/login/" element={<Login />}></Route>
                <Route path="/profile/" element={<Profile />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
	);
}
