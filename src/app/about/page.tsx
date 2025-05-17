import { fonts } from '@/app/components/ui/fonts';

export default function AboutPage() {
  return (
    <section className='flex flex-col items-center gap-6 px-4 mt-6'>
      <div className='max-w-3xl'>
        <h1 className={`${fonts.stix} text-4xl py-3`}>About this project</h1>
        <p className={`${fonts.radley} text-lg/7 py-7`}>
          Business Environment & Human Rights News is an issue-focused search engine that hopes to
          increase the visibility of environmental and human rights reporting.
          This project is still in beta and continues to be updated to source the best and 
          most relevant journalism for some of humanity's worst crimes.
        </p>
        <p className={`${fonts.radley} text-lg/7 justify-self-end py-3`}>
          This project was created by <a className='text-blue-600'
          href='https://mattphillips.space' 
          target='_blank'>Matthew Phillips</a>.
          Read my blog post <a className='text-blue-600'
          href='https://www.mattphillips.space/blog/am-i-funding-human-rights-abuses' 
          target='_blank'>here</a> about the story behind this project.
        </p>
      </div>
      
    </section>
  )
}