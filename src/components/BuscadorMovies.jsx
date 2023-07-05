import styled from "@emotion/styled";
import ResultFiltro from "./ResultFiltro";

const Flex = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  position: relative;

  input {
    border-radius: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 5rem;
    padding-left: 0.5rem;
    border: none;
  }

  h3 {
    color: #fff;
    font-size: 24px;
    margin: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    h3 {
      margin: 0;
    }
  }
`;

const InputContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  background-color: #ddd12761;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px #292626;
  width: 100%;
  border-radius: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  max-height: 250px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
    outline: none;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    top: 4.8rem;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Message = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0;
`;

const BuscadorMovies = ({
  setBuscarPeli,
  setPeliculaSeleccionada,
  buscaPeli,
  setBuscaPeli,
  resultados,
  sinResultados,
}) => {
  const handleBuscar = () => {
    setBuscaPeli("");
  };

  return (
    <Flex>
      <h3>Buscar Película:</h3>
      <input
        type="text"
        placeholder="Busca el título de la peli..."
        value={buscaPeli}
        onChange={(e) => setBuscaPeli(e.target.value)}
      />

      {resultados.length > 0 && (
        <InputContainer onClick={handleBuscar}>
          {resultados.map((peli) => (
            <ResultFiltro
              key={peli.imdbID}
              peli={peli}
              setBuscarPeli={setBuscarPeli}
              setPeliculaSeleccionada={setPeliculaSeleccionada}
            />
          ))}
        </InputContainer>
      )}

      {sinResultados && (
        <InputContainer onClick={handleBuscar}>
          <MessageContainer>
            <Message>No se encontraron resultados.</Message>
          </MessageContainer>
        </InputContainer>
      )}
    </Flex>
  );
};

export default BuscadorMovies;
