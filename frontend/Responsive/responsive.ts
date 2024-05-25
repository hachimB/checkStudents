import { moderateScale, scale, verticalScale } from "react-native-size-matters"



export const rS=(size: number)=>{
    return scale(size)
}

export const Vs=(size: number)=>{
    return verticalScale(size)
}

export const Ms=(size: number, factor?: number)=>{
    return moderateScale(size, factor )
}