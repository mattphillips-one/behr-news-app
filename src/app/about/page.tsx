import { fonts } from '@/app/components/ui/fonts';

export default function AboutPage() {
  return (
    <section className='flex flex-col items-center gap-6'>
      <h1 className={`${fonts.ovo} text-3xl`}>About this project</h1>
      <p>Let me tell you about this project</p>
    </section>
  )
}