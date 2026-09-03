import { useDispatch, useSelector } from "react-redux"
import store from "../redux/store"
import { useEffect } from "react";
import { setMessages } from "../redux/messageSlice";


const usegetRealTimeMessage = () => {
    const {socket} = useSelector(store=>store.socket);
    const {message} = useSelector(store=>store.socket);
    const dispatch = useDispatch();
    useEffect(() => {
        socket?.on("newMessage", (newMessage)=>{
            dispatch(setMessages([]))
        })
    },[]);
};
export default usegetRealTimeMessage;