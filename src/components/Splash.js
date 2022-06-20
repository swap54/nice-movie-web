import React,{useEffect,useState} from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import bg from '../styles/bg.webp'
import "../styles/splash.css"
function Splash(){
    let navigate = useNavigate();
    var [prg,setPrg] = useState(1);
    useEffect(() => {
        for(let i=1;i<101;i++){
            setPrg(i);
        }
        const timer = setTimeout(() => {
          navigate('/home')
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    return(
        <>
        <div id="spl-body">
            <img src={bg}/>
            <div className="ld1" on>
                    <ReactLoading className="load"
                    type="spin"
                    color="#f5f2f2"
                    height={200}
                    width={150}
                    />
                </div>
        </div>
        </>
    );
}
export default Splash;