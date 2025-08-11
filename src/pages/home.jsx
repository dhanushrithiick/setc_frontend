import Testimonial from '../components/Testimonial';
import '../stylesheets/home.css';
import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';
import Line from '../components/line.jsx';





function Home(){


    return(
        <>
        <Nav/>
        <div className='home'>

            <div className="home-hero_section_container">


        
                    


                <div className="home-hero_section">
                     
               <img src="/images/tm_logo.png" className="home-hero_section_tm_logo" />
                    <div className='home-tagline'>
                        <div>
                            <p>100 years of &nbsp;</p>
                        </div>
                        <div>
                            <p> Confident Voices</p>
                        </div>
                    </div>
                  
                    <p className='home-description'>Whether you want to enhance your communication skills or develop leadership qualities, 
                    Toastmasters International provides the tools and support to help you start your journey 
                    toward personal and professional growth.</p>
                </div>
            </div>


            <div className="home-welcome_message_container">
                <div className="home-welcome_message">
                    <p>Speak. Lead. Inspire.</p><br/>

                    <p className='home-wm_highlight'>Welcome to Sri Eshwar Toastmasters Club,</p><br/>

                    <p>Public speaking can feel overwhelming, right??? Your palms sweat, your mind races, and suddenly,
                    finding the right words feels impossible. Or maybe you’re already comfortable speaking but want to truly
                    captivate an audience and lead with confidence.</p><br/>

                    <p>Sound familiar?</p><br/>

                    <p>Maybe you’ve avoided speaking up at meetings, even though you had something valuable to say.
                    Perhaps you’ve watched others deliver presentations effortlessly and thought, “Why can’t I do that?”
                    Or you’ve been meaning to join Toastmasters but haven’t taken the leap yet.
                    You’re not alone. And this is exactly why Sri Eshwar Toastmasters Club exists.</p><br/>

                    <p>Since 2018, we’ve been helping people just like you—nervous beginners, aspiring leaders, and experienced 
                    speakers looking to take their skills to the next level. Our supportive, no-pressure environment lets you 
                    practice, make mistakes, and grow—all while connecting with others on the same journey.</p><br/>

                    <p>Every meeting is a chance to improve, to laugh, to learn, and to discover that public speaking isn’t just
                    a skill—it’s a gateway to building your confidence and finding your voice.</p><br/>
                </div>
            </div>
            <Line/>
         <Testimonial/>
            
        </div>
        <Footer/>
        </>
    )
}

export default Home;
