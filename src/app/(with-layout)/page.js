import HomeBanner from '@/components/HomeBanner'
import Image from 'next/image'

export const metadata = {
  title: 'Home | Zet',
  description: 'Zet',
}

const Home = () => {
  return (
    <main>
      <HomeBanner/>
    </main>
  )
}

export default  Home
