import { useCallback, useEffect, useRef } from 'react';
import '../input.css';
import LoadPopUp from './loadPopUp';
import AddBubbleButton from './AddBubbleButton';

const BubbleArena = () => {

    return (
        <div className="min-h-screen min-w-screen">
            <div className="flex flex-col items-center">
                <LoadPopUp />
            </div>
        </div>
    )
}

export default BubbleArena;