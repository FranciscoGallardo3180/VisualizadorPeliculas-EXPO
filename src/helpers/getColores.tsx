import ImageColors from "react-native-image-colors";

export const getImageColors = async (uri: string) => {

    const colors = await ImageColors.getColors(uri, {});
    let primary;
    let secundary;


    switch(colors.platform){
        case 'android':
            primary = colors.dominant;
            secundary =colors.average;
            break;
        case 'ios':
            primary = colors.primary
            secundary = colors.secondary
    }

    return [primary,secundary]
    
}