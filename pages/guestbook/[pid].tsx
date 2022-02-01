import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GuestCard, {
  IGuestbook,
  IProps,
} from '@/components/template/GuestCard/GuestCard';
import styled from 'styled-components';

// Styled
const GuestbookDetailWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

//

// * DEV
import { dummyGuestbookData } from '@/constants/dummy';
//

const pid = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [guestbook, setGuestbook] = useState<IGuestbook | null>(null);

  useEffect(() => {
    // TODO: 개별 방명록 fetch할 것
    if (pid !== undefined) {
      const data = dummyGuestbookData.find(
        ({ guestbookId }) => guestbookId === pid,
      );

      if (data?.guestbookId) {
        console.log('data', data);
        setGuestbook(data);
      }
    }
  }, [pid]);

  return (
    <GuestbookDetailWrap>
      {guestbook?.guestbookId && (
        <GuestCard direction='horizontal' content={guestbook} />
      )}
    </GuestbookDetailWrap>
  );
};

export default pid;
