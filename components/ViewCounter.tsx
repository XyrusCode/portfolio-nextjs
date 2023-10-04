import { useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';

type Props = {
  slug: string;
  isCard: boolean;
};

const ViewCounter = ({ slug, isCard }: Props) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);

  // Check if the slug exists in cookies
  const isVisited = Cookies.get(slug) === 'true';

  const shouldCount = process.env.NODE_ENV === 'production' && !isCard && !isVisited;

  useEffect(() => {
    if (shouldCount) {
      // Set a cookie to mark the slug as visited
      Cookies.set(slug, 'true', { expires: 7 }); // Set an optional expiration date

      // Make the POST request to count the view
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });
    }
  }, [shouldCount, slug]);

  return <span>{`${data?.total ? data.total.toLocaleString() : '–––'} views`}</span>;
};

export default ViewCounter;
