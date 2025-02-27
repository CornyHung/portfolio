export default function Home() {
  return (
    <div class="portfolio-main">
        <header>
            <div class="container">
                <nav>
                    <div class="logo">
                        {/* <a href="#"><img src="assets/images/logo.svg" alt="logo"></a> */}
                    </div>
                    <div class="toggle-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="navigation-bar">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">my work</a></li>
                            <li><a href="#">blog</a></li>
                            <li class="hire-btn"><a href="#">Hire me</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <div class="main-content">
            <div class="container">
                <div class="main-content-wrapper">
                    <div class="col-left">
                        <span>Hi i am John Deo</span>
                        <h1>Freelancer | Fullstack Developer</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nesciunt quasi vitae,
                            quisquam ullam suscipit quos placeat iusto nihil, nam rerum? Vel nesciunt iste cum vero
                            aspernatur maxime quo itaque? Laboriosam nesciunt quasi vitae,
                            quisquam ullam suscipit quos</p>
                        <a href="#" class="btn-main">
                            See my work
                            {/* <span> <img src="assets/images/arrow-right.svg" alt="arrow"></span> */}
                        </a>
                    </div>
                    <div class="col-right">
                        {/* <img src="assets/images/john.svg" alt="Display image"> */}
                    </div>
                </div>
                <div class="experience-section">
                    <div class="experience-inner">
                        <div class="col">
                            <h3>5 years</h3>
                            <p>experience</p>
                        </div>
                        <div class="col">
                            <h3>50+</h3>
                            <p>Happy clients</p>
                        </div>
                        <div class="col">
                            <h3>120+</h3>
                            <p>Projects completed</p>
                        </div>
                        <div class="col">
                            <h3>30+</h3>
                            <p>Award won</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
