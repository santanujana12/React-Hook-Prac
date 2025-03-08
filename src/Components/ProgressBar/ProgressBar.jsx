import { useEffect, useState } from "react";
import "./progressBar.css"

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        let timeIntervalId;
        if(progress!=100){
            timeIntervalId = setInterval(()=>setProgress(prev => prev+10),1000);
        }else{
            clearInterval(timeIntervalId);
        }
       return ()=>{
        clearInterval(timeIntervalId);
       }
    },[progress]);

    return (
        <>
            <div className="main_bar">
                <div style={{ width: `${progress}%`, backgroundColor: "green" }}>
                    <div style={{textAlign:"center"}}>
                        Loading {progress}%
                    </div>
                </div>
            </div>
        </>
    )
}