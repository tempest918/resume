import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas execution size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        window.addEventListener('resize', setCanvasSize);

        // Matrix characters - mixing katakana and latin
        const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charArray = chars.split('');

        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Array to track the y position of each column
        // Initialize with random negative values so they don't all start at once
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }

        const draw = () => {
            // Semi-transparent black to create fade trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Randomly skip drawing some frames to give it a more "glitchy" non-uniform feel
                // or just standard rain. Let's do standard rain for smoothness first.

                const text = charArray[Math.floor(Math.random() * charArray.length)];

                // x = column index * font size
                // y = drop value * font size
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly after it has crossed screen
                // Adding a randomness to the reset makes them fall scattered
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33); // ~30fps

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.15 }} // Keep it subtle so text is still readable
        />
    );
};

export default MatrixRain;
