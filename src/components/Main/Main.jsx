import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

function Main() {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);


    return (
        <div className="main">
            <div className="nav">

                <p>
                    <img
                        src={assets.gemini_icon}
                        alt="Gemini"
                        style={{ width: "40px", height: "40px" }}
                    />
                    Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Developer.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p> Is HTML a programming Language,Explain it!</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>What are some necessary skills to improve yourself?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Add some comments to the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>

                    </div>

                }



                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)}
                            value={input} type="text" placeholder='Enter a Promt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate information, including about peopel, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
                    <p className="made-with-love">
                        Made with <span role="img" aria-label="love">♥</span> by <a href="https://github.com/adarsh7123" target="_blank" rel="noopener noreferrer">Adarsh7123</a>
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Main