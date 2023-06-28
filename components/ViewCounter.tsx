import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';


type Props = {
  slug: string;
  isCard: boolean;
};

const ViewCounter = ({ slug, isCard }: Props) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);
  const shouldCount = process.env.NODE_ENV == 'production' && !isCard;


  useEffect(() => {
    if(shouldCount){
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();}
  }, [shouldCount, slug]);

  return <span>{`${data?.total! > 0 ? data?.total.toLocaleString() : '–––'} views`}</span>;
};

export default ViewCounter;
