import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, StyledLink } from 'components/MovieList/Movielist.styled';

const MovieList = ({ films }) => {
    const location = useLocation();
  
    return (
        <List>
            {films.map(({ title, id }) => {
                return (
                    <Item key={id}>
                        <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                            {title}
                        </StyledLink>
                    </Item>
                );
            })}
        </List>
        
    );
    
};

export default MovieList;

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};