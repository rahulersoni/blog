import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';

const Btn = ({ type, className, text, link, size, action, maximum, count }) => {

    const fullWidth = size ? 'w-full' : '';
    const shadow = type ? `shadow-${type}-shadow` : '';
    const [loading, setLoading] = useState(false); // Initialize loading state

    const isDisabled = (action && maximum === count) || loading; // Determine if the button should be disabled

    const handleClick = (e) => {
        e.preventDefault();
        if (!isDisabled) { // Only proceed with the action if the button is not disabled
            setLoading(true); // Set loading state to true

            if (action) {
                setTimeout(() => {
                    action();
                    setLoading(false); // Reset loading state after action is completed
                }, 2000); // Simulate a 2-second delay
            }
        }
    }

    return (
        <>
            <Link
                onClick={action ? handleClick : undefined}
                to={link}
                className={`inline-block ${fullWidth + ' ' + className} px-6 py-3 rounded-md font-semibold text-white bg-${type} ${shadow} shadow-${type}-shadow transition-colors hover:bg-secondary hover:shadow-secondary-shadow dark:hover:bg-slate-950`}
                disabled={isDisabled} // Disable the button if it should be disabled
                style={isDisabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}} // Apply styling for disabled state
            >
                {loading ? (
                    <>
                        Loading <FiLoader className="inline-block animate-spin ml-2" /> {/* Apply an animation class to rotate the icon */}
                    </>
                ) : (
                    text
                )}
            </Link>
        </>
    );
}

export default Btn;
