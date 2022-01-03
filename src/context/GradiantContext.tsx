import React, { createContext, useState } from 'react'

interface ImageColor {
    primary: string;
    secondary: string;
}

interface ContextProps{
    colors: ImageColor;
    prevColors: ImageColor;
    setMainColors: (colors: ImageColor) => void;
    setPrevMainColors: (colors: ImageColor) => void;
}

export const GradiantContext = createContext({} as ContextProps );

export const GradiantProvider = ({ children }: any) => {
    const [colors, setColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = (colors: ImageColor)=>{
        setColors(colors);
    }

    const setPrevMainColors = (colors: ImageColor)=>{
        setPrevColors(colors);
    }
    return (
        <GradiantContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradiantContext.Provider>
    )
}
