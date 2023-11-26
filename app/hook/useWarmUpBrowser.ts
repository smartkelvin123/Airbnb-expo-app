import {useEffect} from "react"
import * as webBrowser from "expo-web-browser"

export default function useWarmUpBrowser() {
    useEffect(() => {
        void webBrowser.warmUpAsync()

        return () => {
            void webBrowser.coolDownAsync
        }
       
    },[])
}