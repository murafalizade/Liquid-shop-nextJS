import MasterPage from '../components/layout'
import NavSection from '../components/sections/firstSection'
import AboutSection from '../components/sections/secondSection'
import InsideSection from '../components/sections/thirdSection'
import MainProduct from '../components/sections/mainSection'

export default function Home() {

  return (
    <MasterPage>
      <NavSection />
      <AboutSection />
      <InsideSection />
      <MainProduct />
    </MasterPage>
  )
}