'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    const onToggleNav = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            navRef.current &&
            !navRef?.current?.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    // Đóng menu khi click bên ngoài
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    return (
        <header className="w-full pt-5 md:pt-9 px-5 md:px-48">
            <div className="container m-auto">
                <nav className="w-full flex justify-between items-center relative">
                    <div className="logo">
                        <a href="#">
                            <Image
                                className="rounded-full"
                                src="/images/face.jpg"
                                width={70}
                                height={70}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <button className="toggle-bar" onClick={onToggleNav}>
                        <span />
                        <span />
                        <span />
                    </button>
                    <div
                        ref={navRef}
                        className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-md transition-all duration-300 md:relative md:w-auto md:flex md:bg-transparent md:shadow-none ${
                            isOpen
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto'
                        }`}
                    >
                        <ul className="p-4 space-y-2 md:p-0 md:space-y-0 md:flex md:items-center text-center font-semibold">
                            <li>
                                <Link
                                    className="block p-2 md:p-0 md:mx-3"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="block p-2 md:p-0 md:mx-3"
                                    href="/project"
                                >
                                    Project
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="block p-2 md:p-0 md:mx-3"
                                    href="/blog"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="md:ml-5">
                                <a
                                    className="block font-medium py-[10px] px-8 bg-white rounded-full border-red-300 border-2 hover:bg-red-300 hover:text-white transition-all duration-300"
                                    href="/images/hungns_cv.pdf"
                                    download
                                >
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};
