import * as API from 'services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieHeader, Main, FormElement, FormField, Button, InfoHeader } from 'pages/Movies/Movies.styled';
import { Formik } from 'formik';
import  MovieList  from 'components/MovieList/MovieList';


const Movies = () => {
    // const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);


    useEffect(() => {
        const userQuery = searchParams.get('query');
        if (userQuery) {
            loadingFilms(userQuery);  
        }
    },[searchParams]);

const loadingFilms = async value => {
        if (value === '') {
            return;
        }
        try {
            const response = await API.getMovieByQuery(value);
            setMovies(response);
            setIsLoading(true);
        }
        catch (error) {
            console.log(error);
    }
    } 

const handleSubmit = (values, actions) => {

        actions.resetForm();
        actions.setSubmitting(false);

        if (values.searchQuery === '') {
        return;
        }
        setSearchParams({ query: values.searchQuery });
        loadingFilms(values.searchQuery);

    }
    
// const handleSubmit = newQuery => {
//     if (query.toLowerCase() !== newQuery.toLowerCase()) {
//       setSearchParams({ query: newQuery });
//       setQuery(newQuery);
//     }
//     if (query.trim() === '') {
//       const message = 'Nothing found =(';
//       setError(message);
      
//     }
//   };

    return (
        <Main>
            <MovieHeader>Movies</MovieHeader>
            <Formik
                initialValues={{ searchQuery: searchParams.get('query') || '' }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <FormElement>
                        <FormField
                            name="searchQuery"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search films"
                        />
                        <Button type="submit" disabled={isSubmitting}>
                            Search
                        </Button>
                    </FormElement>
                )}
            </Formik>
            {movies.lenght === 0 && searchParams.get('query') && isLoading && <InfoHeader>'Nothing found =('</InfoHeader>}
             <MovieList films={movies} />
        </Main>

    );
}

export default Movies;
