import React, { useState, useEffect } from 'react';

const quotes = [
    {
        text: "Simple ingredients prepared in a simple way – that's the best way to take your everyday cooking to a higher level.",
        author: "Jose Andres"
    },
    {
        text: "Cooking is an art, but all art requires knowing something about the techniques and materials.",
        author: "Nathan Myhrvold"
    },
    {
        text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn"
    },
    {
        text: "The only real stumbling block is fear of failure. In cooking, you've got to have a what-the-hell attitude.",
        author: "Julia Child"
    },
    {
        text: "Good painting is like good cooking; it can be tasted, but not explained.",
        author: "Maurice de Vlaminck"
    },
    {
        text: "Cooking is like snow skiing: If you don’t fall at least 10 times, then you’re not skiing hard enough.",
        author: "Guy Fieri"
    },
    {
        text: "No one is born a great cook, one learns by doing.",
        author: "Julia Child"
    },
    {
        text: "Once you understand the foundations of cooking—whatever kind you like, whether it’s French or Italian or Japanese—you really don’t need a cookbook anymore.",
        author: "Thomas Keller"
    },
    {
        text: "Life is a combination of magic and pasta.",
        author: "Federico Fellini"
    }
];

const Sec3 = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                setIsVisible(true);
            }, 2000);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section sec3">
            <div className="quote-container">
                {quotes.map((quote, index) => (
                    <div key={index} className={`quote ${index === currentQuoteIndex ? 'show' : 'fade-out'}`}>
                        <p className="sec3-text">{quote.text}</p>
                        <p className="sec3-author"> - {quote.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sec3;
