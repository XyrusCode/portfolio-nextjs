// import { useEffect } from 'react';
// import useSWR from 'swr';

// import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';

const ViewCounter = ({ count }: any) => {
  // const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);

  // useEffect(() => {
  //   const registerView = () =>
  //     fetch(`/api/views/${slug}`, {
  //       method: 'POST'
  //     });

  //   registerView();
  // }, [slug]);

  return <span>{`${count! > 0 ? count.toLocaleString() : '–––'} views`}</span>;
};

export default ViewCounter;
