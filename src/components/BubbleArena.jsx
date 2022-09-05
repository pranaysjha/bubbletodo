import '../input.css';
import AddBubbleForm from './AddBubbleForm';
import LoadPopUp from './LoadPopUp';

const BubbleArena = () => {

    return (
        <div className="">
            <div className="flex flex-col justify-center items-center w-screen h-screen" onClick={() => console.log('clicked')}>
              <LoadPopUp />
            </div>
            <AddBubbleForm />
        </div>
    )
}

export default BubbleArena;