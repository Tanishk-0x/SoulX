import React from 'react'
import '../Style/Ramayana.css'
import { IoIosSwitch } from "react-icons/io";
import { useState } from 'react';
import Loader from '../components/loader';
import TypingEffect from '../Typing/typing';

import arrow from '../Assets/Pro_Images/dhanush.png'
import { NavLink } from 'react-router-dom';

 // ----------------------------------------------

 import one from '../Assets/cards_images/ramayan/one.jpg'
 import two from '../Assets/cards_images/ramayan/two.jpg'
 import three from '../Assets/cards_images/ramayan/three.jpg'
 import four from '../Assets/cards_images/ramayan/four.jpg'
 import five from '../Assets/cards_images/ramayan/five.jpg'
 import six from '../Assets/cards_images/ramayan/six.jpg'
 import seven from '../Assets/cards_images/ramayan/seven.jpg'
 import eight from '../Assets/cards_images/ramayan/eight.jpg'
 import nine from '../Assets/cards_images/ramayan/nine.jpg'

 // ----------------------------------------------


const API_KEY = " PASTE_YOUR_API_KEY_HERE.. " ; 




const Ramayana = () => {

  const [Question, setQuestion] = useState('');
  const [isSending, setIsSending] = useState(false)
  const [Answer, setAnswer] = useState('')


  const trainingPrompt = [
    {
      "parts": [{
        "text": "now you work as a ramayan perspective question answerer I asked questions and my problem and you have to answer in ramayana perspective also display what part of ramayan you have used to to answer that question also add some spiritual emojis and at last display source that means the specific part of ramayan is used to answer my question and also give me one shlok also add some spiritual emoji between texts to look it fancy and note that if i ask a weird question someone one , something item name etc , and person name that not relate to ramayan just display a warning massege that ask another note that the answer must be correct and it is in around 450 to 500 words add some spirituality emojis between text in each and every answer"
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


  const AnserthisQuestion = async () => {
    

    let url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY

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



        <NavLink to='/gita'>
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
                    <img src={arrow} />
                </div>

                <div className="inp">

                  <div className="cover">
                    <input type='text' value={Question} placeholder='Ask From Ramayana '
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
                        <img src={arrow} />
                        <button 
                            onClick={AnserthisQuestion}
                        > Generate 
                        </button>   
                    </div>

                </div>


                <div className="freq">

                    <div className="item" onClick={ () => { setQuestion("What is the central conflict of the Ramayana") }}>
                      What is the central conflict of the Ramayana
                    </div>

                    <div className="item" onClick={ () => { setQuestion("How is the Ramayana relevant to modern society")}}>
                    How is the Ramayana relevant to modern society
                    </div>

                    <div className="item" onClick={ () => { setQuestion("How Hanuman help Rama in quest to rescue Sita")}}>
                    How Hanuman help Rama in quest to rescue Sita
                    </div>

                    <div className="item" onClick={ () => { setQuestion("What role does the forest play in the Ramayana")}}>
                    What role does the forest play in the Ramayana
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

          <div className="card" onClick={ () => {setQuestion("Kevat ki naiya")  ; AnserthisQuestion() ; }}>
            <img src={one} />
          </div>
          <div className="card" onClick={ () => {setQuestion("Hanuman ji burns lanka") ; AnserthisQuestion() }}>
            <img src={two} />
          </div>
          <div className="card" onClick={ () => {setQuestion("Ram ji returns to ayodhya") ; AnserthisQuestion() }}>
            <img src={three} />
          </div>
          <div className="card" onClick={ () => {setQuestion("Jatayu") ; AnserthisQuestion() }}>
            <img src={four} />
          </div>
          <div className="card" onClick={ () => {setQuestion("Hanuman ji Meets Sita") ; AnserthisQuestion() }}>
            <img src={five} />
          </div>
          <div className="card" onClick={ () => {setQuestion("Shabri ke ber") ; AnserthisQuestion() }}>
            <img src={six} />
          </div>          
          <div className="card" onClick={ () => {setQuestion("Ram siya") ; AnserthisQuestion() }}>
            <img src={seven} />
          </div>          
          <div className="card" onClick={ () => {setQuestion("Ram ji Worship Shiv ji") ; AnserthisQuestion() }}>
            <img src={eight} />
          </div>          
          <div className="card" onClick={ () => {setQuestion("Ram ji defeat ravan") ; AnserthisQuestion() }}>
            <img src={nine} />
          </div>



          
        </div>

    </div>

    </div>


  )
}

export default Ramayana
