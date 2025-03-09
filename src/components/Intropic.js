import React, {useState} from "react";
import './Intropic.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import video from '../engagementvid.MOV';
import covpic from '../cover.jpg';

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
            </body>
        </div>
    );
}

export default IntroPic;