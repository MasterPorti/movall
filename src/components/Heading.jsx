import React from 'react'
import SearchIcon from '../assets/search.svg'

function Heading (props) {
  return (
    <div className='hd-container'>
      <div className='hd-optionsContainer'>
        <p>Movies</p>
        <p>TV Shows</p>
      </div>
      <div className='hd-logoContainer'>
        <img className='hd-logo' src='https://raw.githubusercontent.com/MasterPorti/MasterPorti/main/logoEmote.png' alt='logo' />
      </div>
      <div className='hd-profileContainer'>
        <button className='hd-searchButton'>
          <img className='hd-searchIcon' src={SearchIcon} alt='search' />
        </button>
        <img className='hd-logo' src='https://art-gallery-latam.api.hbo.com/images/18f05765-e535-4805-831d-702e838fe725/avatar?size=128x128&format=png' alt='profile' />
        <p>Julio</p>
      </div>
    </div>
  )
}

export default Heading
