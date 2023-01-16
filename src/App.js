import React, {useRef} from "react";
import {Layer, Stage} from "react-konva";
import ColoredRect from "./components/ColoredRect";
import ImageCanvas from "./components/ImageCanvas";

const width = 300;
const height = 400;

function App() {
    const stageRef = useRef(null);

    function downloadCanvas(canvas, filename = 'canvas.png') {
        const link = document.createElement('a');
        link.setAttribute('download', filename);
        link.setAttribute('href', canvas.toDataURL());
        link.click();
    }

    const handleExport = () => {
        // const uri = stageRef.current.toDataURL();
        // console.log(uri);
        downloadCanvas(stageRef.current);
    }

    return (
        <div>
            <Stage ref={stageRef} width={width} height={height} style={{
                width: width,
                height: height,
                border: '1px dashed #333'
            }}>
                <Layer>
                    <ColoredRect/>
                    <ImageCanvas/>
                </Layer>
            </Stage>
            <button onClick={handleExport}>Download</button>
        </div>
    );
}

export default App;
