'use client'

import { useTheme } from 'next-themes';
import React from 'react'

export default function ModeButton() {

    const { theme, setTheme } = useTheme();

    const handleModeChange = ():void => {
        const html = document.getElementsByTagName('html');
        const current = html[0].getAttribute('className');

        if (current == 'dark') {
            html[0].setAttribute('className', 'light');
            setTheme('light');
        }
        else {
            html[0].setAttribute('className', 'dark');
            setTheme('dark');
        }
    }

    return (
        <button type="button" title="Change Mode" className={`w-8 h-8 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'} border-1.5 rounded-lg`} onClick={handleModeChange}>
            <i className={`${theme === 'dark' ? 'ri-moon-line' : 'ri-sun-line'} text-lg text-text`} />
        </button>
    )
}
