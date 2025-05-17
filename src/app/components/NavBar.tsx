import Link from "next/link";
import { fonts } from "./ui/fonts";

export default function Navbar() {
  return (
    <nav className='flex flex-row items-center md:items-baseline w-full text-white border-b-1 border-neutral-300 px-3 pb-1 md:pb-2 justify-center gap-10 bg-neutral-900 dark:bg-black'>
      <a href='/' className={`${fonts.stix} font-bold text-white text-xl md:text-2xl w-2/3 md:w-full text-left px-5 pt-3`}>
        Business Environment & Human Rights News
      </a>
      
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
    </nav>
  )
}