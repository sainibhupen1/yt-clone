import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContextProvider } from "./context/contextApi";

const App = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Feed />
                    <Routes>
                        <Route path="/" element={<Feed />} />
                        <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContextProvider>
    );
};

export default App;
