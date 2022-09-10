import { useEffect } from "react";
import { initBubble } from "../modules/physics";
import '../input.css';

const Bubble = (props) => {

    useEffect(() => {
        const bubble = initBubble(props.id, props.due, props.world); //assigns bubble DOM element to Matter body
        (function rerender() {
            bubble.render();
            requestAnimationFrame(rerender);
        })(); // self-invoking
    }, [props.id, props.due, props.world]);

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
        'user-select': 'none',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'border-radius': '50%'
    }

    return (
        <div id={props.id} style={style}>
            {props.title}
        </div>
    );
}

export default Bubble;