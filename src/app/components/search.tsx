'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { BlackButton } from '@/app/components/ui/button-black';
import { fonts } from '@/app/components/ui/fonts';

export default function Search({ placeholder, value }: {placeholder: string, value: string}) {
  const searchParams = useSearchParams();
  const [ query, setQuery ] = useState(searchParams.get('query')?.toString() || "");
  const router = useRouter();

  const handleSearch = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    // params.set('page', '1');
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    router.push(`/?${params.toString()}#search`);
  }

  // we pass query param from homepage into 'value' so that when
  // the search query is updated from the outside, the search bar
  // updates with the value typed out
  useEffect(() => {
    setQuery(value);
  }, [value]);

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