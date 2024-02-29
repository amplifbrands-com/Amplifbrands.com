{/**from vinith-> ScrollTopButton added  */}
import React, { useState } from 'react';
import '../styles/scroll.css'; // Import your CSS file for styling
import { FaArrowUp } from 'react-icons/fa'; 
function ScrollToTopButton() {
    // State variable to track button visibility
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle the button click event and scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional smooth scrolling behavior
        });
    };

    // Function to handle scroll event and toggle button visibility
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 100); // Show button when user scrolls down 100px
    };

    // Add event listener for scroll events
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button 
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}  outlined-btn`}
            onClick={scrollToTop}
        >
        <FaArrowUp className='m-0'/>
        </button>
    );
}

export default ScrollToTopButton;
