import { FC } from 'react';

interface Props {}

const Loading: FC<Props> = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2" />
    </div>
  );
};

export default Loading;
