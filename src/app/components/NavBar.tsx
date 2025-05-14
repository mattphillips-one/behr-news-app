import Link from "next/link";
import { fonts } from "./ui/fonts";

export default function Navbar() {
  return (
    <nav className='flex flex-row w-full border-t-1 border-b-1 border-neutral-300 py-2 justify-center gap-10 bg-white dark:bg-black'>
      <Link className={`${fonts.radley} hover:underline active:text-neutral-600 md:active:text-black`}
        href='/'
      >
        HOME
      </Link>
      <Link className={`${fonts.radley} hover:underline active:text-neutral-600 md:active:text-black`}
        href='/about'
      >
        ABOUT
      </Link>
    </nav>
  )
}