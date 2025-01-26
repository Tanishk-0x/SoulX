import React from 'react'
import '../Style/Ramayana.css'
import { IoIosSwitch } from "react-icons/io";
import { useState } from 'react';
import Loader from '../components/loader';
import TypingEffect from '../Typing/typing';

import bansuri from '../Assets/Pro_Images/bansuri.png'
import { NavLink } from 'react-router-dom';

 // ------------------------------------------------- 

 import one from '../Assets/cards_images/gita/one.jpg'
 import two from '../Assets/cards_images/gita/two.jpg'
 import three from '../Assets/cards_images/gita/three.jpg'
 import four from '../Assets/cards_images/gita/four.jpg'
 import five from '../Assets/cards_images/gita/five.jpg'
 import six from '../Assets/cards_images/gita/six.jpg'
 import seven from '../Assets/cards_images/gita/seven.jpg'
 import eight from '../Assets/cards_images/gita/eight.jpg'
 import nine from '../Assets/cards_images/gita/nine.jpg'

 // --------------------------------------------------


const API_KEY = " PASTE_YOUR_API_KEY_HERE.. " ; 



const BhagawatGita = () => {

  const [Question, setQuestion] = useState('');
  const [isSending, setIsSending] = useState(false)
  const [Answer, setAnswer] = useState('')


  const trainingPrompt = [
    {
      "parts": [{
        "text": "Now you work as a bhagwat gita perspective question answerer I asked you a question and your task is to answer that question from the bhagwat gita perspective and also give one shlok in sanskrit realate with the answer and also display the source holds which part of bhagwat gita is used to asnwer my question and also note that the answer you have returns must me correct and detailed in around 400 to 450 words and add some spiritualic emojis bewteen texts to make it fancy and attractive Note that it user asked a weired question its may be person name or any weird thiings so you have to display a warning massege Ask Another Question ! add some spirituality emojis between text in each and every answer "
      }],
      "role": 'user'
    },
    {
      "parts": [
        {
          "text": "okay"
        }
      ],
      "role": "model"
    }
  ]


  const AnswerthisQuestion = async () => {

    let url = "PASTE_API_URL_HERE.." + API_KEY

    let messageToSend = [
      ...trainingPrompt,
      {
        "parts": [{
          "text": Question
        }
        ],
        "role": "user"
      }
    ]

    setIsSending(true)

    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contents": messageToSend
      })
    })

    let resjson = await res.json()
    setIsSending(false)

    let responseMessage = resjson.candidates[0].content.parts[0].text

    // console.log(responseMessage)

    setAnswer(responseMessage);


  } 

  return (

    <div className='mains'>

      <header className="heading">
        <div className="namaste">
          <TypingEffect className="name" text="नमस्ते.." speed={80} />
        </div>



        <NavLink to='/ramayana'>
        <div className='change'>
        <IoIosSwitch />
        </div>
        </NavLink>


        

      </header>


    <div className="parts">

        <div className="left">


            <div className="input">

              <div className="bind">

              </div>
                <div className="arrow">
                    <img src={bansuri} />
                </div>

                <div className="inp">

                  <div className="cover">
                    <input type='text' value={Question} placeholder='Ask From BhagwatGita '
                      onChange={(e) => setQuestion(e.target.value)}
                    /> 
                      <div className="loader">
                        {
                          isSending ? 
                          <Loader/>
                          :
                          ""
                        }
                      </div>
                  </div>


                    <div className="button">
                        <img className='bansuri' src={bansuri} />
                        <button 
                            onClick={AnswerthisQuestion}
                        > Generate 
                        </button>   
                    </div>

                </div>


                <div className="freq">

                    <div className="item" onClick={ () => { setQuestion("What is nature of soul according to Bhagavad Gita") }}>
                    What is nature of soul according to Bhagavad Gita
                    </div>

                    <div className="item" onClick={ () => { setQuestion(" The concept of karma and its impact on our lives") }}>
                    The concept of karma and its impact on our lives
                    </div>

                    <div className="item" onClick={ () => { setQuestion("How the Gita help us overcome fear and anxiety") }}>
                    How the Gita help us overcome fear and anxiety
                    </div>

                    <div className="item" onClick={ () => { setQuestion("What is the meaning of dharma") }}>
                    What is the meaning of dharma
                    </div>

                    

                </div>


            </div>



            <div className="output">
                <p>
                    {
                        Answer.length > 0 ?
                            <p >
                            <span style={{ whiteSpace: 'pre-wrap' }}>{Answer}</span>
                            </p>
                            :
                            <p className='ans'>
                                Answer Appear Here .. 
                            </p>
                    }
                </p>
            </div>

        </div>


        <div className="right">

          <div className="card" onClick={() => {setQuestion("The Divine Nature of Krishna") ; AnswerthisQuestion() }}>
              <img src={one} />
          </div>
          <div className="card" onClick={() => {setQuestion("The Story of Devotion") ; AnswerthisQuestion() }}>
              <img src={two} />
          </div>
          <div className="card" onClick={() => {setQuestion("The Story of the Three Gunas") ; AnswerthisQuestion() }}>
              <img src={three} />
          </div>
          <div className="card" onClick={() => {setQuestion("The Story of the Divine in All Beings") ; AnswerthisQuestion() }}>
              <img src={four} />
          </div>
          <div className="card" onClick={() => {setQuestion("Moksha (Liberation)") ; AnswerthisQuestion() }}>
              <img src={five} />
          </div>
          <div className="card" onClick={() => {setQuestion("Focus on Action") ; AnswerthisQuestion() }}>
              <img src={six} />
          </div>
          <div className="card" onClick={() => {setQuestion("Act Selflessly (Karma Yoga)") ; AnswerthisQuestion() }}>
              <img src={seven} />
          </div>
          <div className="card" onClick={() => {setQuestion("Forgive and Let Go") ; AnswerthisQuestion() }}>
              <img src={eight} />
          </div>
          <div className="card" onClick={() => {setQuestion("Detach from Desires") ; AnswerthisQuestion() }}>
              <img src={nine} />
          </div>

          
        </div>

    </div>

    </div>


  )
}

export default BhagawatGita
