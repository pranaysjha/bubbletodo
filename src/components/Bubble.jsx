import { useEffect, useRef } from "react";
import { initBubble, popBubble } from "../modules/physics";
import { deleteBubbleFromTasks } from "../modules/tasks";
import '../input.css';

const Bubble = (props) => {

    const bubble = useRef(null);
    useEffect(() => {
        bubble.current = initBubble(props.id, props.due, props.world); //assigns bubble DOM element to Matter body
        (function rerender() {
            bubble.current.render();
            requestAnimationFrame(rerender);
        })(); // self-invoking
    }, [props.id, props.due, props.world, bubble]);

    const color = props.color.toLowerCase();
    //let bubbleStyle = "rounded-full "; // circle
    //bubbleStyle += "bg-" + color + "-500 "; // color
    //bubbleStyle += "absolute flex items-center justify-center ";
    //bubbleStyle += "background:tomato";
    //console.log(bubbleStyle);

    const style = {
        'position': 'absolute',
        'background': color,
        'cursor': 'move',
        'userSelect': 'none',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': '50%'
    }

    const handlePop = () => {
        deleteBubbleFromTasks(props.id, props.color);
        popBubble(bubble.current, props.world);
    }

    return (
        <div id={props.id} style={style} onDoubleClick={() => handlePop()}>
            {props.title}
        </div>
    );
}

export default Bubble;