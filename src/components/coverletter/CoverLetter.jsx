import React from "react";
import './CoverLetter.css'
import { useLocation, NavLink } from "react-router-dom";
import useScrollReveal from '../../hooks/useScrollReveal';
import JobCard from "./jobcard/JobCard";
import jobsDB from "./jobs";

function CoverLetter() {
    useScrollReveal('.reveal');


    // Use the useLocation hook to get access to the URL parameters
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    // Get the value of the 'name' parameter from the URL
    const name = params.get('name') || 'Guest';
    const workplace = params.get('workplace') || 'Your company';

    return (
        <div className="CoverLetter">
            <div className="Letter">
                <div>

                </div>
                <div>
                    <span className="Hi">👋</span>
                    <h1 className="reveal">
                        Hi {name},
                    </h1>
                    <br />
                    <p className="reveal">
                        Ready to meet the next Graphic Designer/Production Artist for <span className="Rosewood">{workplace}</span>? From web to digital and user interface design, I've explored it all. While my recent journey revolves around digital design, my roots in Technical Pre-press and Graphic Design, along with stints in advertising and marketing agencies, make me your go-to guy for not just quality but confidence and efficiency in every design I whip up. Let's dive into the layers of creativity! 🚀

                    </p>
                </div>
            </div>
            <div className="Highlights">
                <div className="reveal Highlight">
                    <div className="Icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.9507 25C34.9191 27.0155 27.0155 34.9191 25 44.9507C22.9845 34.9191 15.0809 27.0155 5.0493 25C15.0809 22.9845 22.9845 15.0809 25 5.0493C27.0155 15.0809 34.9191 22.9845 44.9507 25Z" stroke="#D87B8E" />
                        </svg>

                    </div>
                    <p>
                        <b className="Rosewood">Strengths</b>
                        <br />
                        I bring over a decade of experience as a Graphic and Web Designer with a knack for crafting visually stunning designs. My work spans various creative disciplines, including web design, digital design, and user interface design. A key aspect of my design philosophy is to not only meet but exceed expectations, a trait that has consistently earned recognition throughout my career.

                    </p>
                </div>
                <div className="reveal Highlight">
                    <div className="Icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.9507 25C34.9191 27.0155 27.0155 34.9191 25 44.9507C22.9845 34.9191 15.0809 27.0155 5.0493 25C15.0809 22.9845 22.9845 15.0809 25 5.0493C27.0155 15.0809 34.9191 22.9845 44.9507 25Z" stroke="#D87B8E" />
                        </svg>

                    </div>
                    <p>
                        <b className="Rosewood">In My Toolbox</b>
                        <br />
                        My multifaceted skill set includes expertise in Graphic Design, Web Design, UI Design, Design Systems, Prototyping, HTML Mailing, Brand Identity, Illustration, Print Design, and more. I am well-versed in a range of tools and platforms, from industry-standard software like Adobe CC to collaborative tools such as Figma, Zeplin, and Axure. My proficiency extends to coding languages such as HTML/CSS and JavaScript (React), as well as version control systems like GIT.
                    </p>
                </div>
                <div className="reveal Highlight">
                    <div className="Icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.9507 25C34.9191 27.0155 27.0155 34.9191 25 44.9507C22.9845 34.9191 15.0809 27.0155 5.0493 25C15.0809 22.9845 22.9845 15.0809 25 5.0493C27.0155 15.0809 34.9191 22.9845 44.9507 25Z" stroke="#D87B8E" />
                        </svg>

                    </div>
                    <p>
                        <b className="Rosewood">What I'm Working On</b>
                        <br />
                        Currently, I'm focused on refining my skills in UI design, exploring the intricate details of layout design, and diving into the world of Design Systems. I am committed to staying on the cutting edge of design trends and technologies, ensuring that my work remains fresh, innovative, and in line with the latest industry standards.
                    </p>
                </div>

            </div>
            <div className="Why">
                <div><h3 className="reveal Rosewood">Why me?</h3></div>
                <div>
                    <p className="reveal">
                        If you appreciate meticulous attention to detail and have a penchant for pixel perfection, don't hesitate to delve into some of the projects I've worked on. My diverse skill set allows me to approach projects holistically, ensuring they not only possess aesthetic appeal but also boast functionality and user engagement. Feel free to explore my online portfolio for an in-depth look at how this toolkit has translated into tangible and impactful design projects.
                        <br />
                        <NavLink className="button-home reveal" to="/Portfolio">
                            See my online portfolio →
                        </NavLink>

                    </p>
                </div>
            </div>
            <div className="Jobs reveal">
                <h3 className="Rosewood">My Experience</h3>
                <div className="JobsContainer">
                    {jobsDB.map(jobsDB => (
                        <JobCard
                            key={jobsDB.id}
                            thejob={jobsDB.job}
                            thecompany={jobsDB.company}
                            thedate={jobsDB.date}
                            thetags={jobsDB.tags}
                        />
                    ))}
                </div>
            </div>
            <br />
            <div className="Cta reveal">

                <p>
                    Liked what you saw in this interactive cover letter? Imagine the wonders we can create together!
                </p>
                <br />
                <h2 className="Rosewood">Let's bring dreams to life</h2>
                <br />
                <div>
                    <svg width="253" height="50" viewBox="0 0 253 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M128 50C128 36.1944 116.806 25 103 25C116.806 25 128 13.8056 128 0C128 13.8056 139.194 25 153 25C139.194 25 128 36.1944 128 50Z" fill="#D87A8E" />
                        <path d="M79.6303 37.1971V14H83.5668V37.1971H79.6303ZM70 27.5668V23.6303H93.1971V27.5668H70Z" fill="white" fill-opacity="0.75" />
                        <path d="M163 21.7959V18H184.651V21.7959H163ZM163 32.1994V28.4036H184.651V32.1994H163Z" fill="white" fill-opacity="0.75" />
                        <path d="M223.803 50L199.368 25.5645C197.419 23.6154 196.119 21.3493 195.47 18.7663C194.836 16.1833 194.844 13.6162 195.493 11.0649C196.143 8.49774 197.435 6.26337 199.368 4.36178C201.349 2.41264 203.607 1.12115 206.142 0.487284C208.694 -0.162428 211.237 -0.162428 213.772 0.487284C216.324 1.13699 218.59 2.42849 220.571 4.36178L223.803 7.49941L227.036 4.36178C229.033 2.42849 231.299 1.13699 233.834 0.487284C236.37 -0.162428 238.905 -0.162428 241.441 0.487284C243.992 1.12115 246.258 2.41264 248.239 4.36178C250.172 6.26337 251.464 8.49774 252.113 11.0649C252.763 13.6162 252.763 16.1833 252.113 18.7663C251.479 21.3493 250.188 23.6154 248.239 25.5645L223.803 50Z" fill="#D87B8E" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5752 41.2444C22.7532 37.2396 24.193 31.5019 24.193 25C24.193 18.4981 22.7532 12.7604 20.5752 8.75565C18.3344 4.63548 15.7341 3 13.5965 3C11.4589 3 8.85857 4.63548 6.61777 8.75565C4.43974 12.7604 3 18.4981 3 25C3 31.5019 4.43974 37.2396 6.61777 41.2444C8.85857 45.3645 11.4589 47 13.5965 47C15.7341 47 18.3344 45.3645 20.5752 41.2444ZM13.5965 50C21.1056 50 27.193 38.8071 27.193 25C27.193 11.1929 21.1056 0 13.5965 0C6.08736 0 0 11.1929 0 25C0 38.8071 6.08736 50 13.5965 50Z" fill="#D87B8E" />
                        <path className="eyes" d="M27.1928 25.9649C27.1928 32.0207 24.4437 36.9298 21.0525 36.9298C17.6612 36.9298 14.9121 32.0207 14.9121 25.9649C14.9121 19.9092 17.6612 15 21.0525 15C24.4437 15 27.1928 19.9092 27.1928 25.9649Z" fill="#D87B8E" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.0313 41.2444C55.2093 37.2396 56.649 31.5019 56.649 25C56.649 18.4981 55.2093 12.7604 53.0313 8.75565C50.7905 4.63548 48.1901 3 46.0525 3C43.915 3 41.3146 4.63548 39.0738 8.75565C36.8958 12.7604 35.4561 18.4981 35.4561 25C35.4561 31.5019 36.8958 37.2396 39.0738 41.2444C41.3146 45.3645 43.915 47 46.0525 47C48.1901 47 50.7905 45.3645 53.0313 41.2444ZM46.0525 50C53.5617 50 59.649 38.8071 59.649 25C59.649 11.1929 53.5617 0 46.0525 0C38.5434 0 32.4561 11.1929 32.4561 25C32.4561 38.8071 38.5434 50 46.0525 50Z" fill="#D87B8E" />
                        <path className="eyes" d="M59.6494 25.9649C59.6494 32.0207 56.9002 36.9298 53.509 36.9298C50.1178 36.9298 47.3687 32.0207 47.3687 25.9649C47.3687 19.9092 50.1178 15 53.509 15C56.9002 15 59.6494 19.9092 59.6494 25.9649Z" fill="#D87B8E" />
                    </svg>

                </div>
            </div>
            <div className="ContactCol">
                <button onClick={() => window.location = 'mailto:talk@dansata.com'}>
                    <p>talk@dansata.com</p>
                </button>
                <button onClick={() => window.location = 'tel:3063511384'}>
                    <p>+1 (306) 351 1384</p>
                </button>
                <div className="SocialLinks">

                    <a href="https://www.linkedin.com/in/dansata" target="_blank" rel="noreferrer">
                        <img src="/assets/Likedin.svg" type="svg" alt="Linkedin" />
                    </a >
                    <a href="https://bit.ly/3QSqzFC" target="_blank" rel="noreferrer">
                        <img className="Svg" src="/assets/Figma.svg" type="svg" alt="Figma" />
                    </a>
                    <a href="https://www.behance.net/dansata" target="_blank" rel="noreferrer">
                        <img src="/assets/Behance.svg" type="svg" alt="Behance" />
                    </a>
                    <a href="https://dribbble.com/dansata" target="_blank" rel="noreferrer">
                        <img src="/assets/Dribbble.svg" type="svg" alt="Dribbble" />
                    </a>
                    <a href="https://github.com/Dansata/dansata" target="_blank" rel="noreferrer">
                        <img src="/assets/Github.svg" type="svg" alt="Github" />
                    </a>


                </div>
            </div>
        </div>
    );
}

export default CoverLetter;

//www.dansata.com/coverletter?name=Carl&workplace=Chess+Club