import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.section`
  height: 400px;
  background-color: #e9ecef;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const HeroWrapper = styled.div`
  width: 100%;   /* max-width 대신 */
  height: 100%;
  position: relative;
  padding: 0;
  // max-width: 1200px;
  // margin: 0 auto;
  // height: 100%;
  // position: relative; 
  // padding: 0 20px;
`;

const SlideContainer = styled.div`
  height: 100%;
  position: relative;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  ${props => props.active && `
    opacity: 1;
  `}
`;

const SlideContent = styled.div`
  text-align: center;
  color: white;
`;

const SlideTitle = styled.h2`
  font-size: 48px;
  margin: 0 0 20px 0;
  font-weight: 700;
`;

const SlideDescription = styled.p`
  font-size: 24px;
  margin: 0;
  opacity: 0.9;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 32px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  
  ${props => props.prev && `
    left: 20px;
  `}
  
  ${props => props.next && `
    right: 20px;
  `}
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  
  ${props => props.active && `
    background: white;
  `}
`;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/image1.jpg' },
    { id: 2, image: '/image2.jpg' },
    { id: 3, image: '/image3.jpg' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <HeroSectionContainer>
      <HeroWrapper>
        <SlideContainer>
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              active={index === currentSlide}
              style={{ backgroundImage: `url(${slide.image})` }}
            // key={slide.id}
            // active={index === currentSlide}
            >
              <SlideContent>
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideDescription>{slide.description}</SlideDescription>
              </SlideContent>
            </Slide>
          ))}
        </SlideContainer>

        <SlideButton prev onClick={goToPrevSlide}>
          ‹
        </SlideButton>
        <SlideButton next onClick={goToNextSlide}>
          ›
        </SlideButton>

        <SlideIndicators>
          {slides.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </SlideIndicators>
      </HeroWrapper>
    </HeroSectionContainer>
  );
};

export default HeroSection;
