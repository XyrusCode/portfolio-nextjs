import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import MetricCard from 'components/metrics/Card';

const AnalyticsCard = () => {
  const { data } = useSWR<Views>('/api/views', fetcher);

  const pageViews = new Number(data?.total);
  const link = 'https://xyruscode.com';

  return (
    <MetricCard
      header="All-Time Views"
      link={link}
      metric={pageViews as number}
      isCurrency={false}
    />
  );
};

export default AnalyticsCard;
