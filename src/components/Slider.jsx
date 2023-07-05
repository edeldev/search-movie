import { useEffect, useRef, useState } from "react";
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import styled from "@emotion/styled";

const Title = styled.h3`
  color: #FFF;
  margin: 0;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 1rem;
`;

const SliderContainer = styled.div`
  overflow: hidden;
`;

const GliderWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Imagen = styled.img`
  width: 10rem;
  height: 14rem;
  border: 1px solid #ddd127;
  transition: transform 0.3s;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`;

const Slider = () => {
  const sliderRef = useRef(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [psychologicalMovies, setPsychologicalMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
    fetchPsychologicalMovies();
  }, []);

  useEffect(() => {
    let slidesToShow = 1;
    if (window.innerWidth >= 765) {
      slidesToShow = 6;
    }

    if (sliderRef.current) {
      new Glider(sliderRef.current, {
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        draggable: true
      });
    }
  }, [popularMovies, psychologicalMovies]);

  const fetchPopularMovies = async () => {
    const result = await fetch("http://www.omdbapi.com/?s=popular&apikey=fc1fef96");
    const data = await result.json();
    const movies = data.Search || [];
    setPopularMovies(movies);
  };

  const fetchPsychologicalMovies = async () => {
    const result = await fetch("http://www.omdbapi.com/?s=psychological&apikey=fc1fef96");
    const data = await result.json();
    const movies = data.Search || [];
    setPsychologicalMovies(movies);
  };

  const sliderData = [
    {
      title: "Populares",
      images: popularMovies.map((movie) => movie.Poster),
    },
    {
      title: "Psicológicas",
      images: psychologicalMovies.map((movie) => movie.Poster),
    },
  ];

  return (
    <>
      {sliderData.map((slider, index) => (
        <div key={index}>
          <Title>{slider.title}</Title>
          <SliderContainer className="slider-container">
            <div className="glider-contain">
              <GliderWrapper ref={sliderRef}>
                {slider.images.map((image, imageIndex) => (
                  <Imagen key={imageIndex} src={image} alt="movie" />
                ))}
              </GliderWrapper>
            </div>
          </SliderContainer>
        </div>
      ))}
    </>
  );
};

export default Slider;
