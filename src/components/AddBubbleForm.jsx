import '../input.css';

const AddBubbleForm = () => {

    return (
        <div className='absolute bottom-0 right-0 mx-3 my-11'>
            <div className="dropdown dropdown-top dropdown-end">
                <label tabIndex="0" className="btn btn-circle btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  			        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
			        </svg>
                </label>
                
                <div className="card dropdown-content w-96 bg-neutral shadow-xl">
                    <div className="card-body">
                        <label className="label">
                            <span className="label-text">Task Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Pick a Date</span>
                        </label>
                        <input type="date" className="input input-bordered w-full max-w-xs"></input>
                        <button className="btn btn-outline mt-6">Create Bubble</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBubbleForm;