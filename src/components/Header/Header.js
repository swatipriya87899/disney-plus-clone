import React from 'react';
import './Header.css';

const Header = () => {

    //Navbar Menu with logo
    const navMenu= [
        {
            logo:'/images/home-icon.svg',
            menu:'HOME'
        },
        {
            logo:'/images/watchlist-icon.svg',
            menu:'WATCHLIST'
        },
        {
            logo:'/images/original-icon.svg',
            menu:'ORIGINALS'
        },
        {
            logo:'/images/movie-icon.svg',
            menu:'MOVIES'
        },
        {
            logo:'/images/series-icon.svg',
            menu:'SERIES'
        },
        

    ]
  return (
    <div className='nav'>
        <img src='/images/logo.svg'></img>
        <div className='nav_menu'>
            {
                navMenu.map((nav)=>{
                    return(
                        <a>
                            <img src={nav.logo}></img>
                            <span>{nav.menu}</span>
                        </a>
                    )
                })
            }      
        </div>
        <div className='nav_menu'><a><img src='/images/search-icon.svg'/><span>search</span></a></div>
        <div className='user_img'>
            <img src='/images/profile_photo.png'></img>
        </div>
    </div>
  )
}

export default Header