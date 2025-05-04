import Link from 'next/link';
import { fonts } from '@/app/components/ui/fonts';

const navItems = {
  '/about': {
    name: 'about',
  }
}

export function Navbar() {

  return (
    <aside className="tracking-tight flex justify-between mb-10 md:mb-0">
      <div className="px-2 lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative items-baseline"
          id="nav"
        >
          <a href='/' className={`${fonts.ovo} text-2xl m-3`}>BEHR News</a>
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
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