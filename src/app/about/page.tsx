import { fonts } from '@/app/components/ui/fonts';

export default function AboutPage() {
  return (
    <section className='flex flex-col items-center gap-6 px-4'>
      <h1 className={`${fonts.ovo} text-3xl`}>About this project</h1>
      <p className={`${fonts.newsreader} max-w-3xl text-lg/7 text-justify`}>
        Business Environment & Human Rights News is an issue-focused search engine that hopes to
        increase the visibility of environmental and human rights reporting.
        This project was created by software developer
        <a className='text-blue-600'
        href='https://mattphillips.space' 
        target='_blank'> Matthew Phillips </a> 
        and continues to be updated to source the best and most relevant journalism to some of 
        humanities worst crimes.
      </p>
    </section>
  )
}