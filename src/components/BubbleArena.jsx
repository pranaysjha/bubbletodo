import { useCallback, useEffect, useRef } from 'react';
import '../input.css';
import LoadPopUp from './loadPopUp';
import AddBubbleForm from './AddBubbleForm';

const BubbleArena = () => {

    return (
        <div className=''>
            <button className="w-screen h-screen" onClick={() => {console.log('clicked')}}>Placeholder</button>
            <AddBubbleForm />
        </div>
    )
}

export default BubbleArena;