import Image from 'next/image';

export const Header = () => {
    return (
        <header className="w-full pt-5 md:pt-9 px-5 md:px-48">
            <div className="container m-auto">
                <nav className="w-full flex justify-between">
                    <div className="logo">
                        <a href="#">
                            <Image
                                src="/images/logo.svg"
                                width={49}
                                height={35}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <div className="toggle-bar">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex justify-between gap-6">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Project</a>
                            </li>
                            <li>
                                <a href="#">blog</a>
                            </li>
                            <li className="ml-0 md:ml-20">
                                <a
                                    className="font-medium py-[10px] px-8 bg-white rounded-full"
                                    href="#"
                                >
                                    Hire me
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};
