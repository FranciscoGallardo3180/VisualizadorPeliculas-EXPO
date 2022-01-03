import React, { useRef } from 'react'
import { Animated } from 'react-native';

 const useFade = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const fadeIn = (callback?: Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start(()=>callback ? callback(): null);
    }

    const fadeOut =()=>{
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    return{
        //exprotar funciones
        opacity,
        fadeIn,
        fadeOut
    }
}



export default useFade
