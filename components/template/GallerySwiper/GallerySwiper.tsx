import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '@/components/common/Slider/Slider';
import styled from 'styled-components';

interface itemsProps {
  name: string;
  message: string;
  imgSrc: string;
}

const dummy: itemsProps[] = [
  {
    name: 'a',
    message: 'a입니다',
    imgSrc: '/gallery/img00.JPG',
  },
  {
    name: 'b',
    message: 'b입니다',
    imgSrc: '/gallery/img01.JPG',
  },
  {
    name: 'c',
    message: 'c입니다',
    imgSrc: '/gallery/img02.JPG',
  },
];

// Steyld

const SliderWrap = styled.div`
  width: 100%;
  height: 500px;
`;

const Image = styled.span<{ src: string }>`
  display: block;
  width: 100%;
  height: 500px;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;

//

const GallerySwiper = () => {
  const settings = {
    pagination: {
      type: 'progressbar',
      navigation: true,
      loop: true,
    },
  };

  return (
    <SliderWrap>
      <Slider settings={settings}>
        {dummy.map(({ name, message, imgSrc }) => (
          <SwiperSlide key={name}>
            <Image src={imgSrc} />
            {/* <img src={imgSrc} alt={name} /> */}
            {message}
          </SwiperSlide>
        ))}
      </Slider>
    </SliderWrap>
  );
};

export default GallerySwiper;
