import { FunctionComponent } from 'react';
import { SkeletonWrapper, Skeleton } from './MovieContainerStyles';
import Layout from '../../components/Layout/Layout';

const MoveContainerSkeleton: FunctionComponent = () => {
  return (
    <Layout>
      <SkeletonWrapper>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </SkeletonWrapper>
    </Layout>
  );
};

export default MoveContainerSkeleton;
