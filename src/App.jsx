import { useState, useEffect } from "react"
import HeaderMov from "./components/HeaderMov"
import MoviesPage from "./components/MoviesPage"
import Movie from "./components/Movie"
import BuscadorMovies from "./components/BuscadorMovies"
import Spinner from "./components/Spinner"
import styled from "@emotion/styled"


const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {

  const [ pageMovies, setPageMovies ] = useState(false);
  const [ buscarPeli, setBuscarPeli ] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const [buscaPeli, setBuscaPeli] = useState("");
  const [resultados, setResultados] = useState([]);
  const [sinResultados, setSinResultados] = useState(false);
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    if (buscaPeli.length > 0 && buscaPeli.trim()) {
      setResultados(false)
      setSinResultados(false);
      const loadMovies = async () => {
        const URL = `https://omdbapi.com/?s=${buscaPeli}&page=1&apikey=fc1fef96`;
        const res = await fetch(URL);
        const data = await res.json();
        if (data.Search) {
          setResultados(data.Search);
          setSinResultados(false);
        } else {
          setResultados([]);
          setSinResultados(true);
        }
      };
      loadMovies();
    } else {
      setResultados([]);
      setSinResultados(false);
    }
  }, [buscaPeli]);

  const openMovies = () => {
    setPageMovies(true)
  }

  const openHome = () => {
    setPageMovies(false)
  }

  return (
    <>

      { pageMovies ? (
        <MoviesPage 
          openMovies={openMovies}
          openHome={openHome}
        />
      ) : (
        <>
          <HeaderMov 
            openMovies={openMovies}
            openHome={openHome}
          />

         <Contenedor>
          <BuscadorMovies
            peliculaSeleccionada={peliculaSeleccionada}
            buscarPeli={buscarPeli}
            setBuscarPeli={setBuscarPeli}
            buscaPeli={buscaPeli}
            setBuscaPeli={setBuscaPeli}
            resultados={resultados}
            sinResultados={sinResultados}
            setPeliculaSeleccionada={setPeliculaSeleccionada} 
          />
          { cargando && <Spinner /> }

          { buscarPeli && <Movie
                            peliculaSeleccionada={peliculaSeleccionada}
                            setCargando={setCargando}
                      /> 
            }
         </Contenedor>
      </>
      ) }

    </>  
  )
}

export default App
