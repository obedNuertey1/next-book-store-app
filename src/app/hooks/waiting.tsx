import {useRef} from "react";

const useWaiting = (ms:number)=>{
    const waitRef = useRef<any>(null);

    const wait = async ()=>{
        return await new Promise((resolve)=>{
            waitRef.current = setTimeout(resolve, ms);
        })
    }

    const stopWaiting = () => {
        if(waitRef.current){
            clearTimeout(waitRef.current);
        }
    }

    return [wait, stopWaiting];
}

export default useWaiting;