import Login from '../Components/Login';
import background from '../Files/Login/background.jpg'
import '../CSSFiles/ScreenHome.css'
import React from "react";


export const ScreenHome = () => {
  return (
    <>
      <img src={background} alt='background' className='bg' />
      <Login></Login>
      <hr/>
    </>
  )
}
