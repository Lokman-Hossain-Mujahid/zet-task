import HomeBanner from '@/components/HomeBanner'
import MarqueeSlider from '@/components/MarqueeSlider'
import ProductsOnZet from '@/components/ProductsOnZet'
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
      <ProductsOnZet/>
    </main>
  )
}

export default  Home
