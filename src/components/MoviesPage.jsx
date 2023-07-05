import styled from "@emotion/styled";
import Slider from "./Slider";
import FondoImage from '../assets/movie-background.jpg'
import PlaySvg from '../assets/play.svg'

const Fondo = styled.div`
  background-image: url(${FondoImage});
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: #071516;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background-size: cover;

  &::before {
    content: '';
    width: 100%;
    height: 10%;
    display: block;
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, #071516 83.95%, #071516 100%);
  }

  @media (max-width: 600px) {
    background-position: 73% center;
  }
`;

const FlexHeader = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.p`
  color: #ddd127;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

&:hover {
  color: #ddd1278f;
}
`

const Nav = styled.nav`
display: flex;
gap: 1rem;
`

const BannerContent = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    min-height: 60vh;

    h1 {
        color: #fff;
        font-size: 60px;
        font-weight: bold;
        line-height: 60px;
        margin-bottom: 1rem;
    }

    p {
        width: 40%;
        margin: 0;
        color: #fff;
        font-weight: 400;
        word-spacing: 3px;
    }

    @media (max-width: 700px){
      justify-content: end;
      p {
        width: 80%;
      }
    }
`

const Enlace = styled.a`
    font-size: 1rem;
    background: #ddd127;
    border-radius: 4px;
    padding: 9px 16px;
    display: inline-block;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    line-height: 21px;
    opacity: 1;
    transition: opacity 0.2s;
    margin-top: 1rem;

        &::before {
            content: '';
            display: inline-block;
            background-image: url(${PlaySvg});
            width: 22px;
            height: 21px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            margin-right: 8px;
            margin-left: 2px;
    }

    &:hover {
        background-color: #ddd1278f;
    }
`


const MoviesPage = ({openMovies, openHome}) => {
  return (
    <>
        <Fondo>
          <FlexHeader>
            <Menu onClick={openHome}>EdelFilms</Menu>
            
            <Nav>
              <Menu onClick={ openHome }>HOME</Menu>
              <Menu onClick={openMovies}>MOVIES</Menu>
            </Nav>
          </FlexHeader>
            <BannerContent>
                <h1>WebGenius<br />Lab</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam fugiat cupiditate porro, perferendis asperiores.</p>
                <Enlace href="#">Comenzar</Enlace>
            </BannerContent>
        </Fondo>
        <Slider />
    </>
  )
}

export default MoviesPage
