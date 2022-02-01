import React from 'react';
import { GalleryWrap, ImageCard } from './index.styled';
import Button from '@/components/common/Button/Button';

// Dummy
import { dummyGallery } from '@/constants/dummy';
//

const gallery = () => {
  // TODO: More 기능 구현
  const handleMore = () => {
    console.log('handleMore');
  };

  return (
    <GalleryWrap>
      <ul className='card-list'>
        {dummyGallery &&
          dummyGallery.map(({ src, title, desc }) => (
            <ImageCard className='card' src={src} key={title}>
              <div className='card-thumbnail'>
                <span className='hidden'>{title}</span>
              </div>
              <div className='card-info'>
                <span className='card-info-title'>{title}</span>
                <span className='card-info-desc'>{desc}</span>
              </div>
            </ImageCard>
          ))}
      </ul>

      <div className='more-button-wrapper'>
        <Button type='default-large' text='more +' onClick={handleMore} />
      </div>
    </GalleryWrap>
  );
};

export default gallery;
