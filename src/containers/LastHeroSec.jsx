import React from 'react'
import HeroSec from '../components/HeroSec'
import {banner9} from "../assets/Deals/index"

const LastHeroSec = () => {
  return (
    <div className='mx-8 my-8'>
      <HeroSec heading={"Stay home & get your daily needs from our shop"}
        subHeading={"Start You'r Daily Shopping with Nest Mart"}
        img={banner9}/>
    </div>
  )
}

export default LastHeroSec
