'use client';

import { ChangeEvent, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { BlackButton } from '@/app/components/ui/button-black';

export default function Search({ placeholder }: {placeholder: string}) {
  const searchParams = useSearchParams();
  const [ query, setQuery ] = useState(searchParams.get('query')?.toString() || "");
  const { replace } = useRouter();
  const pathname = usePathname();


  const handleSearch = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    // params.set('page', '1');
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    //const response = await fetch(`/api/search?${params.toString()}`);
    //const { result } = await response.json();
    replace(`${pathname}?${params.toString()}`);
    //setFeed(result);
  }

  return (
    <div className='flex flex-col w-full'>
      <form onSubmit={handleSearch}
      className='flex flex-col w-full self-center gap-3'>
        <input
          className='w-full p-4 py-3 outline-none border-[0.5px] border-stone-500 rounded-sm focus:border-stone-800 focus:ring-1 focus:ring-stone-200
            dark:border-stone-100'
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