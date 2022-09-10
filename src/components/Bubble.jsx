import { useEffect } from "react";
import { initBubble } from "../modules/physics";


const Bubble = (props) => {

    useEffect(() => {
        const bubble = initBubble(props.id, props.due, props.world); //assigns bubble DOM element to Matter body
        (function rerender() {
            bubble.render();
            requestAnimationFrame(rerender);
        })(); // self-invoking
    }, [props.id, props.due, props.world]);

    const color = props.color.toLowerCase();
    let bubbleStyle = "rounded-full "; // circle
    bubbleStyle += "bg-" + color + "-500 "; // color
    bubbleStyle += "flex items-center justify-center";
    console.log(bubbleStyle);

    return (
        <div id={props.id} className={bubbleStyle}>
            {props.title}
        </div>
    );
}

export default Bubble;