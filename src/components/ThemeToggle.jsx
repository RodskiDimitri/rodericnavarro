import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className={`toggle-track ${theme}`}>
                <motion.div 
                    className="toggle-thumb"
                    animate={{ x: theme === 'dark' ? 0 : 24 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    {theme === 'dark' ? (
                        <Moon size={14} color="var(--bg-main)" style={{ fill: "currentColor" }} />
                    ) : (
                        <Sun size={14} color="var(--bg-main)" style={{ fill: "currentColor" }} />
                    )}
                </motion.div>
                <div className="icon-container moon">
                    <Moon size={14} />
                </div>
                <div className="icon-container sun">
                    <Sun size={14} />
                </div>
            </div>

            <style>{`
                .theme-toggle {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    outline: none;
                }

                .toggle-track {
                    width: 52px;
                    height: 28px;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 20px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 6px;
                    transition: all 0.3s ease;
                }

                .toggle-track:hover {
                    border-color: var(--accent-primary);
                    box-shadow: 0 0 10px var(--accent-glow);
                }

                .toggle-track.light {
                    background: rgba(0, 0, 0, 0.05); /* Slight dark track in light mode */
                }

                .toggle-thumb {
                    position: absolute;
                    width: 22px;
                    height: 22px;
                    background: var(--text-main);
                    border-radius: 50%;
                    left: 2px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                }

                .icon-container {
                    color: var(--text-muted);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                    opacity: 0.8;
                }
            `}</style>
        </button>
    );
};

export default ThemeToggle;
