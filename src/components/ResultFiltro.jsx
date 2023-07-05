import styled from "@emotion/styled";

const Imagen = styled.img`
  width: 5rem;
  height: auto;
  border: 1px solid #000000;
`;

const FlexInput = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 5px;
  }
`;

const Display = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  align-items: start;
  margin: 1rem;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;

  &:hover {
    background-color: #ddd1273e;
    cursor: pointer;
  }
`;


const ResultFiltro = ({
  setBuscarPeli,
  peli,
  setPeliculaSeleccionada
}) => {
  const { imdbID, Poster, Title, Year } = peli;

  const seleccionarPelicula = () => {
    setBuscarPeli(peli.Title);
    setPeliculaSeleccionada(peli);
  };

  return (
    <Display onClick={seleccionarPelicula}>
      <Imagen src={Poster} alt={Title} />
      <FlexInput>
        <p>{Title}</p>
        <p>{Year}</p>
      </FlexInput>
    </Display>
  );
};

export default ResultFiltro;

