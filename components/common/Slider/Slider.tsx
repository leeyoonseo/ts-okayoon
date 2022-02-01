import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

interface ISlider {
  children: ReactNode[];
  indicator?: boolean;
  settings?: object;
}

const defaultSettings = {
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
  },
};

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Slider = ({ indicator, settings = {}, children }: ISlider) => {
  const [sliderOpts, setSliderOpts] = useState(
    Object.assign({}, defaultSettings, settings),
  );

  useEffect(() => {
    console.log('sliderOpts', sliderOpts);
  }, [sliderOpts]);

  return (
    /** Swiper에 option값을 받아와서 적용 */
    <Swiper {...settings}>{children}</Swiper>
  );
};

export default Slider;

// 참고:
// - https://swiperjs.com/swiper-api
// - https://velog.io/@yesroad/react-typescript-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-swiper-%EC%BB%A4%EC%8A%A4%ED%85%80
