import '../input.css';

const LoadPopUp = () => {

  return (
    <div className="card w-80 bg-neutral card-bordered border-gray-700 shadow-xl">
      <div className="card-body text-center">
        <div className="text-3xl">Logo</div>
        <div className="text-sm px-8">A beautiful, interactive visualizer for Google Tasks.</div>
        <div className="card-actions flex-col items-center pt-2">
          <button className="btn btn-primary">Sign In</button>
          <button className="btn btn-primary">Try Demo</button>
        </div>
      </div>
    </div>
  );
}

export default LoadPopUp;