import React, {useState} from "react";
import './Intropic.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import video from '../engagementvid.MOV'

function IntroPic(){
    const videoRef = React.useRef(null);
    const [click, setClick] = useState(false);
    function handleClick(){
        setClick(!click);
        if(click){
            videoRef.current.pause();
        }else{
            videoRef.current.play();
        }
    }

    return (
        <div className="main">
            <body>
                <div className="loading">
                    <h2>N+C</h2>
                </div>
                <div className='intro-container'>
                    
                    <div className="cplusn logo">N+C</div>
                    <video ref={videoRef} src={video} type="video/mp4" loop muted="true" playsInline poster="../cover.png"/>
                    <div className='icon' onClick={handleClick}>
                        <i><FontAwesomeIcon icon={click ? faPause : faPlay} /></i>
                    </div>
                    <div className="info"><div className="invite">ENGAGEMENT</div><br></br>Celebrate With us<br></br>4 pm 11.02.2024<br></br>
                    120 Paramount Park Dr Gatihersburg MD 20879<br></br><br></br>
                        <a href="https://nicandcindy.anrsvp.com/#home" target="_blank">
                            <button>RSVP</button>
                        </a>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default IntroPic;