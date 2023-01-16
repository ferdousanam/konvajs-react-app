import React, {Component} from 'react';
import {Image} from 'react-konva';
import Konva from 'konva';
import useImage from "use-image";

function ImageWithUrl(props) {
    // const [image] = useImage(props.path);
    const [image] = useImage('/img_the_scream.jpg');

    return (
        <Image
            x={100}
            y={20}
            width={150}
            height={200}
            draggable
            image={image}
            {...props}
            onDragEnd={(evt => {
                console.log(evt)
            })}
        />
    );
}

class ImageCanvas extends Component {
    state = {
        color: 'green',
    };
    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor(),
        });
    };
    render() {
        return (
            <ImageWithUrl path={'../assets/img_the_scream.jpg'} />
        );
    }
}

export default ImageCanvas;
