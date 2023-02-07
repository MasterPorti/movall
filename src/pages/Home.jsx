import Heading from '../components/Heading'
import HomeCarousel from '../components/HomeCarousel'
import TitleHome from '../components/TitleHome'
import './Home.scss'
function Home (props) {
  return (
    <div className='hm-container'>
      <Heading />
      <HomeCarousel />
      <TitleHome />
    </div>
  )
}

export default Home
