import HomeBanner from '@/components/HomeBanner'
import MarqueeSlider from '@/components/MarqueeSlider'
import Image from 'next/image'

export const metadata = {
  title: 'Home | Zet',
  description: 'Zet',
}

const Home = () => {
  return (
    <main>
      <HomeBanner/>
      <MarqueeSlider/>
    </main>
  )
}

export default  Home
