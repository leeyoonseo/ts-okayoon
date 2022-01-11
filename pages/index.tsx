import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../reducer/index';
import { User, addUser } from '../reducer/users';

import Layout from './layouts/base';
import type { ReactElement } from 'react';
export default function Index() {
  const users = useSelector<ReducerType, User[]>((state) => state.users);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName('');
  };

  return (
    <>
      <h1>Index 파일</h1>
      <div>
        <strong>Reducer테스트</strong>
        <form onSubmit={handleAddUser}>
          <input type='text' value={name} onChange={handleChangeName} />
          <button type='submit'>Add User</button>
        </form>

        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
}

Index.getLayout = function getLayout(Index: ReactElement) {
  return <Layout>{Index}</Layout>;
};
