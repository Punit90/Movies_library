import {useEffect, useState } from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import Paginations from './pagination';


function App() {
  const API_Key = "40a35464b8ca9ceab5a875e5629151b1"
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=" 
  
  // Below states are being used to fetch data and search functionality
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Timeout being used to debouncing functionality. So, that Multiple time API calls can be handeled
  const [timeoutId, updateTimeoutId] = useState();

  //Below states are being used for pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

  // Used to fetch all movies data
  const getAllMovies = () =>{
    axios.get(API_URL).then( 
      (response) => {
        setMovies(response.data.results);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
  }

  // UseEffect being used to fetch all API data and it is controlle with search query params. 
  // So, that if user removes data from input then it will loads all movies data.
  useEffect(
    () => {
      searchQuery === "" ? getAllMovies() : onTextChange(searchQuery)
    },[searchQuery]
  )

  const fetchData = (searchString) => {
    axios.get(
      `${SEARCH_URL}${API_Key}&query=${searchString}`,
    ).then(
      (response) => {
        setMovies(response.data.results);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  };
  
  // Trigger when user search for movie with timeout. So, that multiple API calls can be prevented
  const onTextChange = (func) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchData(func), 500);
    updateTimeoutId(timeout);
  };
  
  const onSearch = (e) =>{
    e?.target ? setSearchQuery(e.target.value): setSearchQuery("")
  }

  return (
    <>
    {/* Navigation bar and search bar */}
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Movie Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={searchQuery}
                onChange={(e) => onSearch(e)}
              ></FormControl>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* This is the container which is mapping movie data and passing it to movieConrtainer module for multiple iteration */}
    <div>
      {
        currentPosts.length > 0
        ? (
        <div className='container'>
          <div className='grid'>
            {currentPosts.map((data, i) => 
              <MovieContainer className="infoModal" key={i} {...data}/>
              
              )}
          </div>
          {/* pagination logic */}
            <Paginations
              totalPosts={movies.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
          />
        </div>
        ):(
          // Used when there is delay in response while searching
        <div className='text=3xl text-center' style={{color:"white", fontSize:"xx-large", marginTop:"5rem"}}>Loading.......</div>
       )} 

    </div>
    </>
  );
}

export default App;
