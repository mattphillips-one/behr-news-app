import Image from 'next/image';
import { assets } from  '@/assets/assets';

export const BlackButton = ({label}: {label: string}) => {
  
  return (
    <p className='border border-white dark:border-stone-300 bg-black text-white flex items-center gap-2 py-3 px-3 md:px-4 lg:px-10 hover:shadow-md shadow-stone-100/10 cursor-pointer'
      >
      {label}
      <Image className='w-4'
        src={assets.right_arrow}
        alt='right white arrow'
      />
    </p>
  )
}