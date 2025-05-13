'use client';

import { ChangeEvent, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { BlackButton } from '@/app/components/ui/button-black';
import { fonts } from '@/app/components/ui/fonts';

export default function Search({ placeholder }: {placeholder: string}) {
  const searchParams = useSearchParams();
  const [ query, setQuery ] = useState(searchParams.get('query')?.toString() || "");
  const { replace } = useRouter();
  //const pathname = usePathname();

  const handleSearch = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    // params.set('page', '1');
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    replace(`/?${params.toString()}`);
  }

  return (
    <div className='flex flex-col w-full'>
      <form onSubmit={handleSearch}
      className='flex flex-col w-full self-center gap-2'>
        <input
          className={`${fonts.outfit} w-full p-1 pt-4 pb-2 outline-none border-b-[0.5px] border-stone-500 dark:border-stone-100`}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type='submit'
          className='flex justify-end'>
          <BlackButton label="" />
        </button>
      </form>
    </div>
  )
}