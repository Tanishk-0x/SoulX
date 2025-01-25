import React from 'react'
import logoimg from '../Assets/imgs/logo.png'
import TypingEffect from '../Typing/typing'
import chakra from '../Assets/imgs/chakra.png'
import imgs from '../Assets/imgs/temp.png'
import '../Style/Landing.css'
import { NavLink } from 'react-router-dom'



const Landing = () => {

  return (


    <div className='main'>

        <header className='header'>
            <div className="logo">
                <img src={logoimg} />
            </div>
            <div className="about">
                <img src={chakra} className='rotate'/>
            </div>
        </header>


        <div className="outer">

            <div className="text">
                <div className="content">
                    <span className='tag'> Best Spiritual AI Tool </span>
                    <span className='lines'> Ask Questions From Ramayana & Gita Perspective </span>
                    <span className='desc'>A unique platform where your questions meet
                         the wisdom of the Ramayana and Bhagavad Gita. <br />
                          Discover how these ancient texts can provide guidance for modern life.</span>
                    <TypingEffect text=" What is the central conflict of the Ramayana " speed={80} />

                    <div>
                        <NavLink to='/ramayana'>
                            <button className='click'>
                                Explore
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="preview">
                <div className="imgs">
                     <img src={imgs}  className='hero-image'/>
                </div>
            </div>

        </div>
      
    </div>


  )
}

export default Landing
