import { useState } from 'react';
import '../input.css';




const PolicyPopup = (props) => {

    return (
        <div>
            <div className="daisy-card-popup w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center p-8 bg-gray-800 bg-opacity-75 z-50">

                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">

                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        At BubbleTasks, we respect your privacy and are committed to protecting your personal information.
                    </p>
                    <br />
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        When you use our website, we do not collect any personal information about you. All user accounts and data associated with those accounts are managed and stored by Google.

                        When you use our website, we may access certain personal information from your Google account, such as your name and email address, in order to provide you with access to your Google Tasks lists. This information is used solely for the purpose of displaying your Google Tasks lists on our website in a visual format.

                        We do not share any of your personal information with third parties.
                    </p>
                    <br/>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        If you have any questions or concerns about our privacy policy, please contact the developer at pranay.jha@gmail.com.
                    </p>

                    <button onClick={props.onClose} className="w-full py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800">
                        Close Window
                    </button>
                </div>
            </div>
        </div>
    )

}

export default PolicyPopup;