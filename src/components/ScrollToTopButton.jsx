import React, { useState } from 'react';
import '../styles/scroll.css';
import { FaArrowUp } from 'react-icons/fa'; 
function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 100);
    };
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
