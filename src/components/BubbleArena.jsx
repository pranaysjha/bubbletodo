import '../input.css';
import AddBubbleForm from './AddBubbleForm';

const BubbleArena = () => {

    return (
        <div className="">
            <div className="w-screen h-screen" onClick={() => {console.log('clicked')}}></div>
            <AddBubbleForm />
        </div>
    )
}

export default BubbleArena;