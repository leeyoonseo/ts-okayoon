import React, { useState } from 'react';
import { GalleryWrap, ImageCard, LayerInner } from './index.styled';
import Layer from '@/components/common/Layer/Layer';
import Button from '@/components/common/Button/Button';

// Dummy
import { dummyGallery } from '@/constants/dummy';
//

interface IGalleryItem {
  id: number;
  src: string;
  title: string;
  desc: string;
}

const gallery = () => {
  const [isLayerActivated, setIsLayerActivated] = useState(false);
  const [activatedCard, setActivatedCard] = useState<IGalleryItem | undefined>(
    undefined,
  );

  // TODO: More 기능 구현
  const handleMore = () => {
    console.log('handleMore');
  };

  const handleToggleCard = () => {
    setIsLayerActivated(!isLayerActivated);
  };

  const handleCard = (selectedId: IGalleryItem['id']): void => {
    console.log('handleCard', selectedId);
    const card = dummyGallery.find(({ id }) => id === selectedId);
    if (card) {
      setActivatedCard(card);
    }
    handleToggleCard();
  };

  return (
    <>
      <GalleryWrap>
        <ul className='card-list'>
          {dummyGallery &&
            dummyGallery.map(({ id, src, title, desc }: IGalleryItem) => (
              <ImageCard
                onClick={() => handleCard(id)}
                className='card'
                src={src}
                key={title}
              >
                <div className='card-thumbnail'>
                  <span className='hidden'>{title}</span>
                </div>
                <div className='card-info'>
                  <span className='card-info-title'>{title}</span>
                  <span
                    className='card-info-desc'
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                </div>
              </ImageCard>
            ))}
        </ul>

        <div className='more-button-wrapper'>
          <Button type='default-large' text='more +' onClick={handleMore} />
        </div>
      </GalleryWrap>

      <Layer
        title={activatedCard ? activatedCard.title : 'Gallery'}
        activated={isLayerActivated}
        handleClose={handleToggleCard}
      >
        {activatedCard && (
          <LayerInner>
            <div>
              <div className='layer-img-wrapper'>
                <img src={activatedCard.src} />
              </div>
              <div className='layer-img-desc'>
                <span
                  className='layer-img-desc'
                  dangerouslySetInnerHTML={{ __html: activatedCard.desc }}
                />
              </div>
            </div>
          </LayerInner>
        )}
      </Layer>
    </>
  );
};

export default gallery;
