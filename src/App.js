import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "pages/Home/home";
import Book from "pages/Book/book";
import NotFound from "pages/notfound";


export default function App() {
	return (
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/books" element={<Book />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
	);
}
