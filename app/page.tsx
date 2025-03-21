import { Header } from '@components/Header';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="w-full min-h-screen h-auto">
            <Header />
            <div className="portfolio-main">
                <div className="main-content px-5 lg:px-48">
                    <div className="container m-auto">
                        <div className="main-content-wrapper h-auto lg:h-[70vh] flex flex-col-reverse gap-8 md:gap-0 md:flex-row w-full items-center">
                            <div className="col-left">
                                <span className="text-base md:text-xl font-medium leading-normal mb-[10px] ">
                                    Hi i am Ngô Hùng
                                </span>
                                <h1 className="font-bold text-3xl md:text-[40px] mb-4">
                                    Freelancer | Fullstack Developer
                                </h1>
                                <p className="w-full md:w-[85%]">
                                    With over 3 years of experience in software
                                    development as a full-stack developer, I
                                    have gained extensive skills and knowledge
                                    in this field. I am proficient in developing
                                    large-scale web applications, from backend
                                    development using PHP and Node.js to
                                    frontend development using JavaScript. I
                                    specialize in implementing highly
                                    maintainable modules and have expertise in
                                    working with databases such as MySQL and
                                    MongoDB. My experience also includes
                                    optimizing code and queries to ensure high
                                    performance. Additionally, I excel at
                                    deploying user interfaces compatible across
                                    multiple platforms. I have worked with
                                    Agile/Scrum methodologies, possess team
                                    management skills, and have experience in
                                    gathering and communicating customer
                                    requirements effectively.
                                </p>
                                {/* <a href="#" className="btn-main block mt-8">
                                    See my work
                                    <span>
                                        <Image
                                            src="/images/arrow-right.svg"
                                            width={5}
                                            height={8}
                                            alt="arrow right '>'"
                                        />
                                    </span>
                                </a> */}
                                <ul className="social-contact flex items-center gap-3 mt-8">
                                    <li>
                                        <a className="github" href="#">
                                            <Image
                                                src="/images/tech/github.svg"
                                                width={20}
                                                height={20}
                                                alt="github"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100010547141370&locale=vi_VN">
                                            <Image
                                                src="/images/tech/facebook.svg"
                                                width={40}
                                                height={40}
                                                alt="facebook"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/ngo-hung-corny-716798214/">
                                            <Image
                                                src="/images/tech/linkedin.svg"
                                                width={40}
                                                height={40}
                                                alt="linkedin"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-right w-full">
                                <Image
                                    src="/images/john.svg"
                                    width={331}
                                    height={397}
                                    alt="col right"
                                />
                            </div>
                        </div>

                        <h3 className="font-bold text-xl md:text-2xl mt-10 mb-5">
                            TechStack
                        </h3>

                        <div className="experience-section p-0 md:p-10 rounded-xl mt-12 md:mt-0">
                            <div className="experience-inner">
                                <div className="col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center justify-between items-center">
                                    <Image
                                        src="/images/tech/PHP-logo.svg"
                                        width={100}
                                        height={100}
                                        alt="col right"
                                    />
                                    <Image
                                        src="/images/tech/nextjs.png"
                                        width={100}
                                        height={100}
                                        alt="col right"
                                    />
                                    <Image
                                        src="/images/tech/react-logo.svg"
                                        width={100}
                                        height={100}
                                        alt="col right"
                                    />
                                    <Image
                                        src="/images/tech/Vue-logo.png"
                                        width={100}
                                        height={100}
                                        alt="col right"
                                    />
                                    <Image
                                        src="/images/tech/mysql-logo.svg"
                                        width={100}
                                        height={100}
                                        alt="col right"
                                    />
                                </div>
                            </div>
                        </div>

                        <h3 className="font-bold text-xl md:text-2xl mt-10 mb-5">
                            Highlight
                        </h3>
                        <div className="experience-section p-0 md:p-10 rounded-xl mt-12 md:mt-6 mb-10">
                            <div className="experience-inner flex flex-col md:flex-row justify-between items-center">
                                <div className="col">
                                    <h3 className="font-bold mb-[5px] text-2xl">
                                        3 years +
                                    </h3>
                                    <p className="font-light">experience</p>
                                </div>
                                <div className="col">
                                    <h3 className="font-bold mb-[5px] text-2xl">
                                        10+
                                    </h3>
                                    <p className="font-light">Clients</p>
                                </div>
                                <div className="col">
                                    <h3 className="font-bold mb-[5px] text-2xl">
                                        10+
                                    </h3>
                                    <p className="font-light">
                                        Projects completed
                                    </p>
                                </div>
                                <div className="col">
                                    <h3 className="font-bold mb-[5px] text-2xl">
                                        30+
                                    </h3>
                                    <p className="font-light">Award won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
