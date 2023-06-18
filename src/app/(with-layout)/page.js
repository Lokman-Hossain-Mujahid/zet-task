import HomeBanner from '@/components/HomeBanner'
import Steps from '@/components/HomeComponents/Steps'
import WhyChooseUs from '@/components/HomeComponents/WhyChooseUs'
import MarqueeSlider from '@/components/MarqueeSlider'
import ProductsOnZet from '@/components/ProductsOnZet'
import ZetEffect from '@/components/ZetEffect'
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
      <ZetEffect/>
      <WhyChooseUs/>
      <Steps/>
    </main>
  )
}

export default  Home
