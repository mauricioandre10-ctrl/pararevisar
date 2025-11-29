'use client';

import { useState, useEffect } from 'react';

type TypingEffectProps = {
    text: string;
    onAnimationComplete: () => void;
};

export const TypingEffect = ({ text, onAnimationComplete }: TypingEffectProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        setDisplayedText('');
        setIsTyping(true);
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
                setTimeout(onAnimationComplete, 3000); 
            }
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, onAnimationComplete]);


    return (
        <>
            <span>{displayedText}</span>
            {isTyping && <span className="animate-pulse">_</span>}
        </>
    );
};
