import React, { useEffect, useState } from 'react'
import ArrowIcon from '../assets/arrowIcon.svg'
function HomeCarousel (props) {
  const [next, setNext] = useState(0)
  const [before, setBefore] = useState(0)
  const [fakedata, setData] = useState([])
  const [end, setEnd] = useState(false)

  useEffect(() => {
    const getCarousel = async () => {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=f214beaa9396a825bceec073eec20c6a&language=en-US&page=1'
      const response = await fetch(url)
      const datafecht = await response.json()
      const results = await datafecht.results.map(item => {
        return { id: item.id, url: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}` }
      })
      setData(results)
      setEnd(true)
    }
    getCarousel()
  }, [])

  useEffect(() => {
    if (end) {
      setNext(fakedata[1].id)
      setBefore(fakedata[0].id)
    }
  }, [end])

  const handleNext = () => {
    if (next !== fakedata[fakedata.length - 1].id) {
      const index = fakedata.findIndex(item => item.id === next)
      setTimeout(() => setNext(fakedata[index + 1].id), 200)
      setBefore(fakedata[index - 1].id)
      console.log([index])
    } else {
      console.log('no hay mas')
      setBefore(fakedata[fakedata.length - 2].id)
    }
  }

  const handleBefore = () => {
    if (before !== fakedata[0].id) {
      const index = fakedata.findIndex(item => item.id === before)
      setTimeout(() => setBefore(fakedata[index - 1].id), 200)
      setNext(fakedata[index].id)
    }
  }

  return (
    <>
      <div className='hc-container'>
        {fakedata.map((item, index) =>
          <div
            style={{
              backgroundImage: `url(${item.url})`
            }} className='hc-imgContainer' id={item.id} key={item.id + index}
          >
            <div className='hc-titleContainer'>
              <p className='hc-title'>Black Panther: Wakanda Forever</p>
              <p>Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.</p>
              <button className='hc-button'>Watch Now</button>
            </div>
          </div>)}

      </div>
      <div className='hc-buttonsContainer'>
        <button onClick={handleNext}>
          <a href={`#${next}`}>
            <img src={ArrowIcon} alt='next button' className='hc-bottonImg next' />
          </a>
        </button>
        <button onClick={handleBefore}>
          <a href={`#${before}`}>
            <img src={ArrowIcon} alt='before button' className='hc-before' />
          </a>
        </button>
      </div>
    </>
  )
}

export default HomeCarousel
