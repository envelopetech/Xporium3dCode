import React from "react";
import {View, asset} from "react-360";
import Entity from "Entity";
//import PictureButtonObject from './PictureButtonObject';

const ExhibitionStall = (props) => {
    // let pictureobjectsdata = [];        
    //     pictureobjectsdata.push(
    //         <PictureButtonObject x={-231.4} y={0} z={-15} pic={'https://cdn.filestackcontent.com/gqzJUeAdTfu88xaIu60E'} />
    //     )
    //     pictureobjectsdata.push(
    //         <PictureButtonObject x={-235.35} y={0} z={-15} pic={'https://cdn.filestackcontent.com/gqzJUeAdTfu88xaIu60E'} />
    //     )
    //     pictureobjectsdata.push(
    //         <PictureButtonObject x={-239.3} y={0} z={-15} pic={'https://cdn.filestackcontent.com/gqzJUeAdTfu88xaIu60E'} />
    //     ) 
    return (
        <View>
            {props.pictureobjectsdata}
            <Entity
                style={{
                    transform: [{ translate: [props.xposition, props.yposition, props.zposition] }
                        , { scale: props.scale }
                        , { rotateY: props.rotatey }]
                }}
                source={{
                    obj: asset(props.stallname + ".obj"),
                    mtl: asset(props.stallname + ".mtl")
                }}
                lit
            />
        </View>
    );
}
export default ExhibitionStall;