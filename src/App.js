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
        <div className="flex items-center justify-center h-screen">
            <div className="text-black font-bold rounded-lg border shadow-lg p-10">
                <h1 className="text-4xl font-bold text-center mb-5 py-2 bg-indigo-600 rounded-md text-white">Konvas JS App</h1>
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
                <div className="flex justify-center mt-5">
                    <button className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 w-full" onClick={handleExport}>Download</button>
                </div>
            </div>
        </div>
    );
}

export default App;
