import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
      window.addEventListener("scroll", ()=>{
        // console.log('window.scrollY', window.scrollY);
        if(window.scrollY > 50 ){
        setShow(true)
        }else{
        setShow(false)
        }
      })
    
      return () => {
        window.removeEventListener('scroll', ()=>{})
      }
    }, [])
    
    const handleChange = (e) => {
      setSearchValue(e.target.value)
      navigate(`/search?q=${e.target.value}`)
    }

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix Logo"
        className="nav__logo"
        onClick={() => window.location.reload()}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/225px-Netflix_2015_logo.svg.png"
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder='여기서 영화를 검색하세요'
      />

      <img
        alt="User logged in"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav__avatar"
      />
    </nav>
  );
}
