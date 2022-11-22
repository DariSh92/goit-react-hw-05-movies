import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from 'services/api';
import { useState, useEffect, Suspense } from 'react';
import { Container, LinkBtn, AddInfo, AddInfoTitle, AddInfoItem, AddInfoWrapper, AddInfoItemLink, AddInfoUl } from 'pages/MovieDetails/MovieDetails.styled';
import { AboutMovie } from 'components/AboutMovie/AboutMovie';


const MovieDetails = (id) => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

// useEffect(() => {
//     getMovieDetails(movieId)
//       .then(setMovie)
//       .catch(error => console.log(error));
//   }, [movieId]);

//    useEffect(() => {
//     if (movie) {
//       return;
//     }
//     const getDetails = async () => {
//       try {
//         const response = await getMovieDetails(movieId);
//         setMovie(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getDetails();
//   }, [details, movieId]);

//   if (!details) {
//     return;
//   }
 
    useEffect(() => {
        const uplaodMovieById = async (movieId) => {

            try {
                const response = await API.getMovieDetails(movieId);
              setMovie(response);
              
            }
            catch (error) {
                console.log(error.message);
            }
        }
        uplaodMovieById(movieId);
    }, [movieId]);

    const from = location.state?.from ?? '/';

    return (
    <>
      {movie && (
        <Container>
          <LinkBtn to={from}>Go back</LinkBtn>
          <AboutMovie info={movie}></AboutMovie>
          <AddInfo>
            <AddInfoTitle> Additional information</AddInfoTitle>
            <AddInfoWrapper>
              <AddInfoUl>
                <AddInfoItem>
                  <AddInfoItemLink to="cast" state={{ from }}>
                    Cast
                  </AddInfoItemLink>
                </AddInfoItem>
                <AddInfoItem>
                  <AddInfoItemLink to="reviews" state={{ from }}>
                    Reviews
                  </AddInfoItemLink>
                </AddInfoItem>
              </AddInfoUl>
            </AddInfoWrapper>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </AddInfo>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;


