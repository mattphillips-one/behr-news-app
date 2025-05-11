import { fonts } from '@/app/components/ui/fonts';

export default function AboutPage() {
  return (
    <section className='flex flex-col items-center gap-6 px-4 mt-6'>
      <h1 className={`${fonts.ovo} text-3xl`}>About this project</h1>
      <p className={`${fonts.stix} max-w-3xl text-lg/7 text-justify`}>
        Business Environment & Human Rights News is an issue-focused search engine that hopes to
        increase the visibility of environmental and human rights reporting.
        This project is still in beta and continues to be updated to source the best and 
        most relevant journalism for some of humanity's worst crimes.
      </p>
      <p className={`${fonts.ovo} justify-self-end mt-20`}>
        This project was created by <a className='text-blue-600'
        href='https://mattphillips.space' 
        target='_blank'>Matthew Phillips</a>
      </p>
    </section>
  )
}