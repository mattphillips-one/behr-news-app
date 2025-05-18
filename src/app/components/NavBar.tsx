import Link from "next/link";
import { fonts } from "./ui/fonts";

export default function Navbar() {
  return (
    <nav className='flex flex-row items-center md:items-baseline w-full text-white border-b-1 border-neutral-300 dark:border-neutral-500 px-5 pb-2 justify-between bg-neutral-900 dark:bg-black'>
      <a href='/' className={`${fonts.stix} font-bold text-white text-xl md:text-2xl w-3/4 md:w-full text-left pt-3`}>
        Business Environment & Human Rights News
      </a>
      
      <div className='flex flex-row gap-5'>
        <Link className={`${fonts.noto_sans} font-medium hover:text-neutral-400 md:active:text-black`}
          href='/'
        >
          home
        </Link>
        <Link className={`${fonts.noto_sans} font-medium hover:text-neutral-400 md:active:text-black`}
          href='/about'
        >
          about
        </Link>
      </div>
      
    </nav>
  )
}