import React from 'react';
import Image from 'next/image';
import * as S from './App.styled';

interface IApps {
  name: string;
  src: string;
  id: string;
}

const apps = [
  {
    id: 'guest',
    name: '방명록',
    src: '/apps/icon_guestbook.png',
  },
  {
    id: 'blog',
    name: '블로그',
    src: '/apps/icon_blog.png',
  },
  {
    id: 'gallery',
    name: '사진첩',
    src: '/apps/icon_gallery.png',
  },
  {
    id: 'simsim',
    name: '심심이',
    src: '/apps/icon_simsimi.png',
  },
  {
    id: 'game',
    name: '게임',
    src: '/apps/icon_game.png',
  },
  {
    id: 'portfolio',
    name: '포트폴리오',
    src: '/apps/icon_portfolio.png',
  },
];

const Apps = () => {
  return (
    <S.Wrap>
      {apps.map((app: IApps) => (
        <S.AppButton key={app.name}>
          <S.IconWrap>
            <Image src={app.src} layout='fill' alt={app.name} />
          </S.IconWrap>
          <S.Name>{app.name}</S.Name>
        </S.AppButton>
      ))}
    </S.Wrap>
  );
};

export default Apps;
