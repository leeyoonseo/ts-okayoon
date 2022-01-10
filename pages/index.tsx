// import type { ReactElement } from 'react';
// import BaseLayout from '@/layouts/base';

// const Index = () => {
//   return <div>Index페이지</div>;
// };

// Index.getLayout = function getLayout(page: ReactElement) {
//   return <BaseLayout>{page}</BaseLayout>;
// };

// export default Index;

import type { ReactElement } from 'react';
import Layout from '@/layouts/base';

export default function Page() {
  return <div>뭐지</div>;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
