import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem'

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/*Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="gray"
                        size={16}
                    />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        -{movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
            </View>
            {/**Hilstoria */}
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold',marginHorizontal:20 }}>
                Historia
            </Text>
            <Text style={{ fontSize: 16, marginTop: 10,marginHorizontal:20 }}>
                {movieFull.overview}
            </Text>
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold',marginHorizontal:20 }}>
                Presupuesto
            </Text>
            <Text style={{ fontSize: 18,marginHorizontal:20  }}>
                {currencyFormatter.format(movieFull.budget, { code: 'USD', precision: 0 })}
            </Text>

            {/*Casting */}
            <View style={{marginTop:10, marginBottom:100}}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold',marginHorizontal:20 }}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={( {item,index}) => <CastItem  actor={item} ></CastItem>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10, height:70}}
                />

                {/**/}
            </View>

        </>
    )
}

export default MovieDetails
