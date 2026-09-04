import { useDispatch, useSelector } from "react-redux"
import store from "../redux/store"
import { useEffect } from "react";
import { setMessages } from "../redux/messageSlice";


const useGetRealTimeMessage = () => {
    const {socket} = useSelector(store=>store.socket);
    const {messages} = useSelector(store=>store.message);
    const dispatch = useDispatch();
    useEffect(() => {
        socket?.on("newMessage", (newMessage)=>{
            dispatch(setMessages([]))
        })
    },[socket, setMessages, messages]);
};
export default usegetRealTimeMessage;