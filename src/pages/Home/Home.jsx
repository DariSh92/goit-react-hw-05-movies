import * as API from 'services/api';
import { useState, useEffect } from 'react';
import { Main, Header } from 'pages/Home/Home.styled';
import  MovieList  from 'components/MovieList/MovieList';



const Home = () => {
    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        const recivedFilms = async () => {
            try {
                const response = await API.getMorePopularMovie();
                setFilms(response);
                // console.log(response);

            } catch (error) {
                console.log(error);
            }            
        }
        recivedFilms();
    }, []);


    return (
    <Main>
      <Header>Trending today</Header>
      <MovieList films={films} />
    </Main>
   );
};

export default Home;