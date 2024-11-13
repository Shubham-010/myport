import React, { useState, useEffect } from 'react';

const Scrolltop =()=>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {isVisible && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </div>
            )}
        </>
    );
};
export default Scrolltop;