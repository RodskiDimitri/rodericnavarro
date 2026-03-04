import React, { useEffect, useRef } from 'react';

const ParticleNetwork = ({
    particleColor = 'rgba(0, 240, 255, 0.4)',
    lineColor = 'rgba(0, 240, 255, 0.15)',
    particleCount = 50,
    connectionDistance = 100,
    speed = 0.5
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.width = parent.clientWidth * dpr;
                canvas.height = parent.clientHeight * dpr;
                ctx.scale(dpr, dpr);
            }
        };

        setCanvasSize();

        let particles = [];

        class Particle {
            constructor(w, h) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.radius = Math.random() * 1.5 + 0.5; // Small, subtle particles
            }

            update(w, h) {
                // Bounce off edges smoothly
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();
            }
        }

        const initParticles = () => {
            const w = canvas.width / (window.devicePixelRatio || 1);
            const h = canvas.height / (window.devicePixelRatio || 1);
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(w, h));
            }
        };

        initParticles();

        const animate = () => {
            const w = canvas.width / (window.devicePixelRatio || 1);
            const h = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, w, h);

            // Update and draw particles
            particles.forEach(p => {
                p.update(w, h);
                p.draw(ctx);
            });

            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);

                        // Fading opacity based on distance
                        const opacityRatio = 1 - (dist / connectionDistance);
                        // Extract base color and apply variable opacity (assumes rgba string)
                        const rawColorStr = lineColor.replace(/rgba?\(/, '').replace(/\)/, '');
                        const colorParts = rawColorStr.split(',').map(s => s.trim());

                        if (colorParts.length >= 3) {
                            const r = colorParts[0];
                            const g = colorParts[1];
                            const b = colorParts[2];
                            // Use the maximum defined opacity (colorParts[3] if it exists) multiplied by distance ratio
                            const maxOpacity = colorParts.length === 4 ? parseFloat(colorParts[3]) : 1;
                            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${maxOpacity * opacityRatio})`;
                        } else {
                            ctx.strokeStyle = lineColor; // Fallback
                        }

                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            setCanvasSize();
            // Don't re-init all particles to avoid jarring jumps, just let them bounce back in range
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [particleColor, lineColor, particleCount, connectionDistance, speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{ display: 'block', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        />
    );
};

export default ParticleNetwork;
