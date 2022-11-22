import PropTypes from 'prop-types';

import sorryImage from '../../image/sorry-image.jpg';
import { AboutMovieContainer, AboutMovieWrapper, AboutMovieTitle, AboutMovieSubTitle, AboutMovieDetails } from 'components/AboutMovie/AboutMovie.styled';


export const AboutMovie = ({ info }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;
    
    const baseURL = 'https://image.tmdb.org/t/p/w300';

    const getYear = () => new Date(`${release_date}`).getFullYear();
    const getScor = () => Math.round(`${vote_average}` * 10);

return (
    <AboutMovieContainer>
      <img
        src={poster_path ? `${baseURL}${poster_path}` : sorryImage}
        alt={original_title}
        width="300"
      />
      <AboutMovieWrapper>
        <AboutMovieTitle>
          {original_title} ({getYear()})
        </AboutMovieTitle>
        <AboutMovieDetails>User Score : {getScor()}%</AboutMovieDetails>
        <AboutMovieSubTitle>Overview </AboutMovieSubTitle>
        <AboutMovieDetails>{overview}</AboutMovieDetails>
        <AboutMovieSubTitle>Genres</AboutMovieSubTitle>
        <AboutMovieDetails>
          {genres.map(genre => genre.name).join(', ')}
        </AboutMovieDetails>
      </AboutMovieWrapper>
    </AboutMovieContainer>
  );
};

AboutMovie.propTypes = {
  original_title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};