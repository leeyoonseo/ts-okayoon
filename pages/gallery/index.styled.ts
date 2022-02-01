import styled from 'styled-components';
import { IThemes } from '@/assets/styles/theme';

export const GalleryWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;

  .card-list {
    &:after {
      display: block;
      content: '';
      clear: both;
    }
  }

  .more-button-wrapper {
    margin: 16px 0;
    text-align: center;
  }
`;

// export const ImageItems = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 1em;
//   cursor: pointer;

//   .image-inner {
//     display: inline-block;
//     filter: grayscale(0.8);

//     &:hover {
//       filter: none;
//     }

//     img {
//       width: 100%;
//       height: auto;
//     }
//   }
// `;

export const ImageCard = styled.li<{ src: string }>`
  background: ${({ theme }) => theme.reverse};
  border: 1px solid ${({ theme }) => theme.default};
  width: calc(25% - 12px);
  height: 20vw;
  border-radius: 20px;
  box-sizing: border-box;
  float: left;
  cursor: pointer;
  color: ${({ theme }) => theme.default};
  overflow: hidden;
  min-height: 230px;
  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.2);
  transition: filter 0.5s ease, transform 0.5s ease;
  filter: grayscale(0.8);

  &:hover {
    transform: translateY(-10px);
    filter: grayscale(0);
  }

  & + .card {
    margin-left: 16px;
  }

  &:nth-child(4n + 5) {
    margin-left: 0;
  }

  &:nth-child(1n + 5) {
    margin-top: 16px;
  }

  .card-thumbnail {
    height: 50%;
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-bottom: 1px solid ${({ theme }) => theme.default};
  }

  .card-info {
    display: flex;
    flex-direction: column;
    padding: 10px;

    &-title {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-weight: 700;
      margin-bottom: 5px;
    }

    &-desc {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 13px;
    }
  }

  @media ${({ theme }: IThemes) => theme.device.tablet} {
    width: calc(33% - 12px);
    /* height: 30vw; */

    & + .card,
    &:nth-child(4n + 5) {
      margin-left: 16px;
    }

    &:nth-child(3n + 4) {
      margin-left: 0;
    }

    &:nth-child(1n + 4) {
      margin-top: 16px;
    }
  }

  @media ${({ theme }: IThemes) => theme.device.mobile} {
    width: calc(50% - 12px);
    height: 30vw;

    & + .card,
    &:nth-child(3n + 4) {
      margin-left: 16px;
    }

    &:nth-child(2n + 1) {
      margin-left: 0;
    }

    &:nth-child(1n + 3) {
      margin-top: 16px;
    }
  }
`;

export const LayerInner = styled.div`
  .layer-img-wrapper {
    margin-bottom: 10px;
  }

  .leyer-img-desc {
    font-size: 13px;
  }
`;
