import React, { useContext, useEffect } from "react"
import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MoviePoster from "../components/MoviePoster";
import useMovies from "../hooks/useMovies"

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from "../components/HorizontalSlider";
import GradientBackground from "../components/GradientBackground";
import ImageColors from 'react-native-image-colors'
import { getImageColors } from "../helpers/getColores";
import { GradiantContext } from "../context/GradiantContext";

const { width: windowWidth } = Dimensions.get('window');


const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    
    //Mejorar el aspecto con safeArea (IOS)
    const { top } = useSafeAreaInsets();

    //uso de context
    const {setMainColors} = useContext(GradiantContext);

    //obtener colores del poster
    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        const [primary='green',secondary='orange|'] = await getImageColors(uri);
        setMainColors({primary,secondary});
    }
    useEffect(() => {
       if(nowPlaying.length>0){
           getPosterColors(0)
       }
    }, [nowPlaying])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }



    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/**/}

                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={(index => getPosterColors(index))}
                        />
                    </View>
                    {/**Peliculas Populares */}
                    <HorizontalSlider title="Populares" movies={popular} />
                    <HorizontalSlider title="Mas Valoradas" movies={topRated} />
                    <HorizontalSlider title="Proximamente" movies={upcoming} />




                </View>
            </ScrollView>
        </GradientBackground>



    )
}
export default HomeScreen