import React, { useEffect } from 'react'
import ArrowIcon from '../assets/arrowIcon.svg'
function HomeCarousel (props) {
  const [next, setNext] = React.useState(0)
  const [before, setBefore] = React.useState(0)

  const fakedata = [
    { id: 315162, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/faXT8V80JRhnArTAeYXz0Eutpv9.jpg' },
    { id: 315112, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg' },
    { id: 315156, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/cU7itLM8qmwMiaNnWsJPQLKe79j.jpg' },
    { id: 315119, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg' },
    { id: 215162, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/faXT8V80JRhnArTAeYXz0Eutpv9.jpg' },
    { id: 215112, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg' },
    { id: 215156, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/cU7itLM8qmwMiaNnWsJPQLKe79j.jpg' },
    { id: 215119, url: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg' }
  ]

  useEffect(() => {
    setNext(fakedata[1].id)
    setBefore(fakedata[0].id)
  }, [])

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
      <div className='hc-container'>
        {fakedata.map((item, index) =>
          <div className='hc-imgContainer' id={item.id} key={item.id}>
            <img src={item.url} alt='' className='hc-img' />
          </div>)}
      </div>
    </>
  )
}

export default HomeCarousel
