import '../input.css';
import { useEffect, useState, useRef } from 'react';
import { getAllBubbleLists, getBubblesFromList } from '../modules/tasks'
import AddBubbleForm from './AddBubbleForm';
import Bubble from './Bubble';
import { initArena, updateEngine } from '../modules/physics';

const BubbleArena = () => {

    const firstRender = useRef(true);
    const engine = useRef(null);
    const [bubblesJSX, setBubblesJSX] = useState([]); 

    useEffect(() => {
        console.log('first render: ' + firstRender.current);
        const mapBubblesToJSX = async () => {
            let bubbles = [];
            let JSXbubbles = [];
            const bubbleLists = await getAllBubbleLists();
            console.log(bubbleLists);
            for (let i = 0; i < bubbleLists.length; i++) {
                console.log(bubbleLists[i].id);
                bubbles = await getBubblesFromList(bubbleLists[i].id);
                console.log(bubbles);
                bubbles.forEach((bubble) => {
                    bubble.color = bubbleLists[i].color
                    JSXbubbles.push(<Bubble key={bubble.id} id={bubble.id} title={bubble.title} due={bubble.due} color={bubble.color} />)
                });
            }
            //console.log(JSXbubbles);
            //bubbles = bubbles.map((bubble) => <Bubble id={bubble.id} title={bubble.title} due={bubble.due} color={bubble.color}/>)
            setBubblesJSX(JSXbubbles);
            /*setBubblesJSX(
                bubbles.map((bubble) => 
                    <Bubble
                        key={bubble.id}
                        id={bubble.id}
                        title={bubble.title}
                        due={bubble.due}
                        color={bubble.color}
                    />
                )
            );*/ //not sure why this is not working
            console.log('mapped');
            console.log(bubblesJSX);
        }
        if (firstRender.current) {
            engine.current = initArena();
            mapBubblesToJSX();
            firstRender.current = false;
        }
        /*(function update() {
            updateEngine(engine.current);
            requestAnimationFrame(update);
        })();*/
    }, [bubblesJSX, setBubblesJSX]);

    return (
        <div id="bubbleArena" className="w-screen h-screen">
            <AddBubbleForm bubblesJSX={bubblesJSX} setBubblesJSX={setBubblesJSX}/>
            {bubblesJSX}
        </div>
    )
}

export default BubbleArena;