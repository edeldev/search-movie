import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FlexContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 3rem;
  gap: 4rem;

  h2 {
    margin: 0;
    color: #ddd127;
    font-size: 28px;
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 740px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Imagen = styled.img`
  width: 20rem;
  height: auto;
  border: 1px solid #ddd127;
`;

const FlexCaption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: #fff;
  }

  .parrafo-info {
    background-color: #ddd127;
    padding: 5px;
    border-radius: 5px;
    color: #000;
  }
`;

const FlexInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Genero = styled.p`
  margin: 0;
  background-color: rgb(107 102 102 / 40%);
  padding: 5px;
  border-radius: 5px;
  text-align: center;
`;

const Movie = ({ peliculaSeleccionada, setCargando }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (peliculaSeleccionada) {
      fetchMovieDetails(peliculaSeleccionada.imdbID);
    }
  }, [peliculaSeleccionada]);

  const fetchMovieDetails = async (imdbID) => {
    setCargando(true)
    const result = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=fc1fef96`);
    const movieDetails = await result.json();
    setMovieDetails(movieDetails);
    setCargando(false)
  };

  if (!peliculaSeleccionada || !movieDetails) {
    return null; // Si no hay película seleccionada o no se ha cargado la información, no se muestra nada
  }

  const { Poster, Title, Year, Rated, Genre, Plot } = movieDetails;

  return (
    <FlexContainer>
      <Imagen src={Poster} alt={Title} />
      <FlexCaption>
        <h2>{Title}</h2>
        <FlexInfo>
          <p>
            Year: <span>{Year}</span>
          </p>
          <p className="parrafo-info">
            Ratings: <span>{Rated}</span>
          </p>
        </FlexInfo>
        <Genero>
          Género: <span>{Genre}</span>
        </Genero>
        <p>
          Sinopsis: <span>{Plot}</span>
        </p>
      </FlexCaption>
    </FlexContainer>
  );
};

export default Movie;
