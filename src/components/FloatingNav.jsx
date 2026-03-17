import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { siteConfig } from '../data/config';

const FloatingNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get all nav links in order
    const paths = siteConfig.navLinks.map(link => link.path);
    const names = siteConfig.navLinks.map(link => link.name);
    const currentIndex = paths.indexOf(location.pathname === '' ? '/' : location.pathname);
    
    // Hide floating nav on routes not defined in the main sequence (e.g. 404)
    if (currentIndex === -1 || paths.length === 0) return null;

    const nextIndex = (currentIndex + 1) % paths.length;
    const prevIndex = (currentIndex - 1 + paths.length) % paths.length;

    const nextLabel = names[nextIndex];
    const prevLabel = names[prevIndex];

    const handleNavigate = (index) => {
        if (index !== -1) {
            navigate(paths[index]);
            const mainCard = document.querySelector('.main-card');
            if (mainCard) mainCard.scrollTop = 0;
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="floating-nav-container">
            <div className="floating-nav-pill">
                <button 
                    className="nav-btn next"
                    onClick={() => handleNavigate(nextIndex)}
                    aria-label={`Next: ${nextLabel}`}
                    data-label={`${nextLabel} →`}
                >
                    <ChevronRight size={24} />
                </button>
                <div className="nav-divider"></div>
                <button 
                    className="nav-btn prev"
                    onClick={() => handleNavigate(prevIndex)}
                    aria-label={`Previous: ${prevLabel}`}
                    data-label={`← ${prevLabel}`}
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            <style>{`
                .floating-nav-container {
                    position: fixed;
                    right: 2rem;
                    bottom: 2rem;
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                }

                .floating-nav-pill {
                    background: rgba(19, 19, 22, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 30px;
                    display: flex;
                    flex-direction: column;
                    padding: 0.5rem;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }

                .floating-nav-pill:hover {
                    background: var(--bg-secondary);
                    border-color: var(--border-color);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 15px var(--accent-glow);
                }

                .nav-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-main);
                    opacity: 0.5;
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border-radius: 50%;
                    position: relative;
                }

                .floating-nav-pill:hover .nav-btn {
                    opacity: 1;
                }

                .nav-btn:hover {
                    color: var(--accent-primary);
                    background: rgba(255, 255, 255, 0.05);
                    transform: scale(1.1);
                }

                /* Hover label via CSS pseudo-element + data-label attribute */
                .nav-btn[data-label]::before {
                    content: attr(data-label);
                    position: absolute;
                    right: calc(100% + 12px);
                    top: 50%;
                    transform: translateY(-50%) translateX(8px);
                    background: var(--bg-secondary);
                    border: 1px solid rgba(0, 240, 255, 0.25);
                    color: var(--text-main);
                    font-family: var(--font-body);
                    font-size: 0.72rem;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    white-space: nowrap;
                    padding: 0.3rem 0.7rem;
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35), 0 0 8px rgba(0, 240, 255, 0.1);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }

                .nav-btn[data-label]:hover::before {
                    opacity: 1;
                    transform: translateY(-50%) translateX(0);
                }

                .nav-divider {
                    height: 1px;
                    background: var(--border-color);
                    margin: 0.25rem 0.5rem;
                    opacity: 0.5;
                }

                @media (max-width: 1024px) {
                    .floating-nav-container {
                        right: 1.5rem;
                        bottom: 1.5rem;
                    }

                    .nav-btn {
                        width: 40px;
                        height: 40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default FloatingNav;
