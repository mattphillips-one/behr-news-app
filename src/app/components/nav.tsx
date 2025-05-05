import Link from 'next/link';
import { fonts } from '@/app/components/ui/fonts';

const navItems = {
  '/about': {
    name: 'about',
  }
}

export function Navbar() {

  return (
    <aside className="tracking-tight flex justify-between mb-10 md:mb-5">
      <div className="px-2 w-full lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-baseline justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <a href='/' className={`${fonts.ovo} max-w-[50%] lg:max-w-xs text-xl lg:text-2xl m-3`}>Business Environment & Human Rights News</a>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`${fonts.newsreader} transition-all text-lg hover:text-neutral-800 hover:underline dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}