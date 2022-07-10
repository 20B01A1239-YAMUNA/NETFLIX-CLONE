import React from 'react';
import './App.css'
import requests from './requests';
import Row from './Row';
import Navbar from './Navbar'
import Banner from './Banner'
const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Banner/>
            <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row title = "TRENDING NOW" fetchUrl = {requests.fetchTrending}/>
            <Row title = "ACTION MOVIES" fetchUrl = {requests.fetchActionMovies}/>
            <Row title = "COMEDY MOVIES" fetchUrl = {requests.fetchComedyMovies}/>
            <Row title = "TOP RATED" fetchUrl = {requests.fetchTopRated}/>
            <Row title = "HORROR MOVIES" fetchUrl = {requests.fetchHorrorMovies}/>
            <Row title = "ROMANTIC MOVIES" fetchUrl = {requests.fetchRomanceMovies}/>
            <Row title = "DOCUMENTARIES" fetchUrl = {requests.fetchDocumentaries}/>

            

        </div>
    );
};

export default App;