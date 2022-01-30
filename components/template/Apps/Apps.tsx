import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as S from './App.styled';

interface IApps {
  id: string;
  name: string;
  routePath: string;
  iconSrc: string;
}

const apps = [
  {
    id: 'guest',
    name: '방명록',
    routePath: '/guestbook',
    iconSrc: '/apps/icon_guestbook.png',
  },
  {
    id: 'blog',
    name: '블로그',
    routePath: '/',
    iconSrc: '/apps/icon_blog.png',
  },
  {
    id: 'gallery',
    name: '사진첩',
    routePath: '/',
    iconSrc: '/apps/icon_gallery.png',
  },
  {
    id: 'simsim',
    name: '심심이',
    routePath: '/',
    iconSrc: '/apps/icon_simsimi.png',
  },
  {
    id: 'game',
    name: '게임',
    routePath: '/',
    iconSrc: '/apps/icon_game.png',
  },
  {
    id: 'portfolio',
    name: '포트폴리오',
    routePath: '/',
    iconSrc: '/apps/icon_portfolio.png',
  },
];

const Apps = () => {
  const router = useRouter();
  const handleApp = (path: string): void => {
    router.push(path);
  };

  return (
    <S.Apps>
      {apps.map((app: IApps) => (
        <li className='app-items' key={app.name}>
          <button
            className='app-button'
            onClick={() => handleApp(app.routePath)}
          >
            <S.IconWrap>
              <Image src={app.iconSrc} layout='fill' alt={app.name} />
            </S.IconWrap>
            <span className='app-name'>{app.name}</span>
          </button>
        </li>
      ))}
    </S.Apps>
  );
};

export default Apps;
