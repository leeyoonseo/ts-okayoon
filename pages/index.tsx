import React, { ReactElement, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { ReducerType } from '../reducer/index';
import { InitialState, User, SetUser } from '../reducer/modules/auth.reducer';

import Apps from '@/components/template/Apps/Apps';
import Layout from './layouts/base';
// import Dialog, { TYPE } from '@/components/common/Dialog/Dialog';
// import BaseButton from '@/components/common/Button/Button';

export default function Index() {
  const user = useSelector<ReducerType, User>(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const [visibleDialog, setVisibleDialog] = useState(false);
  // const [name, setName] = useState('');

  // const handleChangeName = (e: any) => {
  //   setName(e.target.value);
  // };

  // const handleSetUser = (e: FormEvent) => {
  //   e.preventDefault();
  //   const state = {
  //     user: {
  //       originId: 1234,
  //       isManager: true,
  //       id: 'okayoon',
  //       avatar: 'ZOE',
  //       nickname: 'zoe.e',
  //     },
  //   } as InitialState;

  //   dispatch(SetUser(state));
  // };

  // const handleSetDialog = () => {
  //   console.log('handleDialog');
  //   setVisibleDialog(!visibleDialog);
  // };

  // const handleConfirm = () => {
  //   console.log('handleConfirm === callback임');
  // };

  return (
    <>
      <Head>
        <title>OKAYOON | HOME</title>
      </Head>

      <Apps />
      {/* <BaseButton
          name='primary'
          size='small'
          text='dialog열기'
          handleClick={handleSetDialog}
        />

        {visibleDialog && (
          <Dialog
            type={TYPE.CONFIRM}
            title='알림'
            message='정말 취소하시겠습니까?'
            handleClose={handleSetDialog}
            callback={handleConfirm}
          />
        )} */}
      {/* <div>
        <strong>Reducer테스트</strong>
        <button onClick={handleSetUser}>버튼</button>

        <ul key={user.originId}>
          <li>{user.originId}</li>
          <li>{user.isManager}</li>
          <li>{user.id}</li>
          <li>{user.avatar}</li>
          <li>{user.nickname}</li>
        </ul>
      </div> */}
    </>
  );
}

Index.getLayout = function getLayout(Index: ReactElement) {
  return <Layout>{Index}</Layout>;
};
