import { Billboard } from '@/types';

interface BillboardProps {
  data: Billboard;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover flex flex-col items-center justify-center'
      >
        <p className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>{data && data.label}</p>
      </div>
    </div>
  );
};

export default Billboard;
