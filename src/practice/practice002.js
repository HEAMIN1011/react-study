// import { useState } from 'react';

// function ColorBox({ bgColor }) {
//     return (
//         <div
//             style={{
//                 width: '100px',
//                 height: '100px',
//                 backgroundColor: bgColor
//             }}
//         />
//     );
// }

// function Practice002() {
//     const [boxes, setBoxes] = useState([]);

//     const addBox = (color, position) => {
//         if (position === 'front') {
//             setBoxes([color, ...boxes]);
//         } else {
//             setBoxes([...boxes, color]);
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <button onClick={() => addBox('red', 'front')}>앞빨간박스추가</button>
//                 <button onClick={() => addBox('blue', 'front')}>앞파란박스추가</button>
//                 <button onClick={() => addBox('green', 'front')}>앞초록박스추가</button>
//                 <button onClick={() => addBox('red', 'back')}>뒤빨간박스추가</button>
//                 <button onClick={() => addBox('blue', 'back')}>뒤파란박스추가</button>
//                 <button onClick={() => addBox('green', 'back')}>뒤초록박스추가</button>
//                 <button onClick={() => {

//                 }}>앞박스삭제</button>
//                 <button onClick={() => {

//                 }}>뒤박스삭제</button>
//             </div>
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {boxes.map((color, index) => (
//                     <ColorBox key={index} bgColor={color} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Practice002;



import ColorBox from './ColorBox';
import './Practice002.css';
import { useState } from 'react';

function Practice002() {


    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black']);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = ['red', ...boxes];
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    let temp = ['blue', ...boxes];
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = ['green', ...boxes];
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                    let temp = [...boxes, 'red'];
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes, 'blue'];
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes, 'green'];
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>

            {
                //['red', 'blue', 'green', 'black']
                boxes.map((value)=>{
                    return <ColorBox bgColor={value}/>
                })
            }

        </div>
    );

    /*
    let [boxes, setBoxes] = useState(
        [<div className="box bg-red"></div>,
        <div className="box bg-blue"></div>,
        <div className="box bg-green"></div>,
        <div className="box bg-black"></div>]
    );

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className="box bg-red"></div>);
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className="box bg-blue"></div>);
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className="box bg-green"></div>);
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...boxes];
                    temp.push(<div className="box bg-red"></div>);
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.push(<div className="box bg-blue"></div>);
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.push(<div className="box bg-green"></div>);
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>

            {
                boxes
            }

        </div>
    );
    */
}

export default Practice002;