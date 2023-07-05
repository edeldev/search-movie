import styled from "@emotion/styled";

const Header = styled.header`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const HeaderMov = ({openMovies, openHome}) => {
  return (
    <Header>
      <Menu onClick={openHome}>EdelFilms</Menu>

        <Nav>
          <Menu onClick={ openHome }>HOME</Menu>
          <Menu onClick={openMovies}>MOVIES</Menu>
        </Nav>
    </Header>
  )
}

export default HeaderMov
