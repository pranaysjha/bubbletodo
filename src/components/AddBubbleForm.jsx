import '../input.css';
import { addBubble } from '../modules/tasks';

const AddBubbleForm = () => {

    const toggleCardVisibility = () => {
        const card = document.getElementById('card');
        if (card.style.display === "none") {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    }

    const handleSubmit = () => {
        const title = document.getElementById('titleInput').value;
        const date = document.getElementById('dateInput').value;
        const color = document.getElementById('colorInput').value;
        console.log(title + " " + date + " " + color);
        if (title && date && color) {
            toggleCardVisibility();
            addBubble(title, date, color);
        }
        else {
            return;
        }
    }

    return (
        <div className='absolute bottom-0 right-0 mx-3 my-11'>
            <div className="dropdown dropdown-top dropdown-end">
                <label tabIndex="0" className="btn btn-circle btn-lg" onClick={() => toggleCardVisibility()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  			        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
			        </svg>
                </label>
                
                <div className="card dropdown-content w-96 bg-neutral shadow-xl" id='card'>
                    <div className="card-body">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>
                        <input id="titleInput" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <input id="dateInput" type="date" className="input input-bordered w-full max-w-xs"></input>
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <select id="colorInput" className="select select-bordered w-full max-w-xs">
                            <option>Red</option>
                            <option>Yellow</option>
                            <option>Blue</option>
                            <option>Orange</option>
                            <option>Green</option>
                            <option>Purple</option>
                            <option>Pink</option>
                            <option>Brown</option>
                            <option>White</option>
                            <option>Grey</option>
                            <option>Black</option>
                        </select>
                        <button className="btn btn-outline mt-6" onClick={() => handleSubmit()}>Create Bubble</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBubbleForm;