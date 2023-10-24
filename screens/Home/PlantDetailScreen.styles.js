import { StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';

const PlantDetailScreenStyles=StyleSheet.create({
    Container:{
        flex:1,
        // width:SIZES.width
    },
    UpperRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'centre',
        position:'absolute',
        top:SIZES.xxLarge,
        width:SIZES.width-44,
        marginHorizontal:20,
        zIndex:999
    },
    Img:{
        // height:SIZES.height/2,
        aspectRatio:1,
        resizeMode:'cover'
    },
    Details:{
     
        marginTop:-SIZES.large,
        width:SIZES.width,
        backgroundColor:COLORS.lightWhite,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,
    },

})
export default PlantDetailScreenStyles;