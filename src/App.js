import React, { useEffect , useState} from 'react';
import './App.css';

const App = () => {
 

  const [isSpecialLinkActivated, setSpecialLinkActivated] = useState(false);

  const checkForSpecialLink = () => {
    const params = new URLSearchParams(window.location.search);
    const skiptheline = params.get('skiptheline');
    return skiptheline !== null;
  };

  useEffect(() => {
    const specialLinkActivated = checkForSpecialLink();
    setSpecialLinkActivated(specialLinkActivated);
  }, []);

  useEffect(() => {
    if (isSpecialLinkActivated) {
      const t = document.getElementsByClassName('wrapper')[0];
      const e = document.createElement('div');
      e.className = 'alert alert-warning text-center';
      e.innerHTML =
        '<b>\u{1F525} Your special link has been activated. If you signup today, you will be auto-bumped to the front of our approval queue!</b>';
      t.insertBefore(e, t.firstElementChild);
      const n = { skiptheline: true };
      p(n);
    }
  }, [isSpecialLinkActivated]);

  const p = (n) => {
    const t = document.getElementById('candidate-login');
    const e = document.getElementById('candidate-signup');
    t.href = t.href + '?skiptheline=' + n.skiptheline;
    e.href = e.href + '?skiptheline=' + n.skiptheline;
  };

  useEffect(() => {
    const handleNavbarTogglerClick = () => {
      const n = document.getElementById('navbarSupportedContent');
      const navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
      if (navbarToggler.classList.contains('collapsed')) {
        n.classList.remove('collapse');
        navbarToggler.classList.remove('collapsed');
      } else {
        n.classList.add('collapse');
        navbarToggler.classList.add('collapsed');
      }
    };
    document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', handleNavbarTogglerClick);

    return () => {
      document.getElementsByClassName('navbar-toggler')[0].removeEventListener('click', handleNavbarTogglerClick);
    };
  }, []);

  useEffect(() => {
    const lazyImages = Array.from(document.querySelectorAll('img.lazy'));
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove('lazy');
            observer.unobserve(image);
          }
        });
      });
      lazyImages.forEach((image) => observer.observe(image));
    }
  }, []);

  const displayWhatsApp = () => {
    const whatsappUs = document.getElementsByClassName('whatsapp-us')[0];
    setTimeout(() => {
      whatsappUs.style.display = 'block';
    }, 7000);
  };

  useEffect(() => {
    f();
  }, []);

  const f = async () => {
    await new Promise((resolve) => setTimeout(resolve, 7000));
    displayWhatsApp();
  };

  return (
    <div className="wrapper">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light navbar-default navbar-static-top" role="navigation">
        <div class="container">
                <a class="navbar-brand page-scroll font-weight-bold" href="/">Hire...X</a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <ul class="navbar-nav my-2 my-lg-0">
                        <li class="nav-item">
                            <p class="nav-link page-scroll" >For
                                Employers</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link page-scroll"
                               >Refer &amp; Earn
                                ₹15k</p>
                        </li>
                        <li class="nav-item">
                            <p id="candidate-login" class="nav-link page-scroll"
                              >Login</p>
                        </li>
                        <li class="nav-item">
                            <p id="candidate-signup" class="nav-link"
                               >Sign Up</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    
      <div class="main" id="main">
        <div class="hero-section app-hero" style={{backgroundImage: "url(https://d383au3bye3rv1.cloudfront.net/static/images/optimized/sky.jpg);"}}>
            <div class="container">
                <div class="hero-content app-hero-content text-center">

                    <div class="row justify-content-md-center">
                        <div class="col-md-12">
                            <h1>Find your next top tech<br class="d-block d-md-none"/> job in 1 week.</h1>
                            <p class="">
                                <span class="yellow-highlight">Are you a top 2%</span> Software Engineer, Product
                                Manager or Data Scientist? <br class="d-none d-md-block"/>Let leading Indian technology
                                <span class="yellow-highlight">companies compete to hire you.</span>
                            </p>
                            <br class="d-block d-md-none"/>
                            <br class="d-block d-md-none"/>
                            <a class="btn  btn-lg" style={{marginTop: "20px"}}
                               href="/candidate/signup">Apply to join</a>
                            <div class="text-muted"  style={{marginTop: "10px"}}>100% free. It takes only 5 minutes</div>

                        </div>
                    </div>
                </div>


                <div class="services-section text-center" id="services">
                    <div class="container">
                        <div class="row  justify-content-md-center">
                            <div class="col-md-8">

                            </div>
                            <div class="col-md-12 text-center">
                                <div class="services">
                                    <div class="row">
                                        <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="services-icon">
                                                <img class="lazy" src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                                     data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png"
                                                     height="60" width="60" alt="Service"/>
                                            </div>
                                            <div class="services-description">
                                                <h1>Step 1: Complete Profile</h1>
                                                <p>
                                                    Once you are approved, we showcase you to leading Indian technology
                                                    startups
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                                            <div class="services-icon">
                                                <img class="icon-2 lazy"
                                                     src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                                     data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" height="60"
                                                     width="60" alt="Service"/>
                                            </div>
                                            <div class="services-description">
                                                <h1>Step 2: Receive Job Offers</h1>
                                                <p>
                                                    Companies start sending interview requests. Talk to only the ones
                                                    you like.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                                            <div class="services-icon">
                                                <img class="icon-3 lazy"
                                                     src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                                     data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" height="60"
                                                     width="60" alt="Service"/>
                                            </div>
                                            <div class="services-description">
                                                <h1>Step 3: Accept Dream Job</h1>
                                                <p>
                                                    Compare your offers and accept the best one. Hired!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="client-section">
            <div class="container text-center">
                <h1 class="hiring-companies">Leading companies build teams on Hire...X</h1>
                <div class="col-md-12 company-logo-list">

                </div>
            </div>
        </div>


        <div class="flex-features" id="features">
            <div class="container">

                <div class="text-center">
                    <h1 class="how-it-works-heading">How It Works </h1>
                </div>

                <div class="flex-split">
                    <div class="f-right">
                        <div class="right-content wow fadeInUp" data-wow-delay="0.2s">
                            <div class="stylishLine"></div>
                            <h2><span class="benefits-heading">Create your free candidate profile</span></h2>
                            <p class="key-differentiators">
                                Answer a few questions about yourself - it takes less than 5 minutes.
                            </p>
                            <ul>
                                <li class="key-differentiators-list">‍<span
                                        class="key-differentiators-list-normal">🏅</span> What is your biggest
                                    achievement?
                                </li>
                                <li class="key-differentiators-list">‍<span
                                        class="key-differentiators-list-normal">👑️</span> What does your ideal
                                    opportunity look like?
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="f-left">
                        <div class="left-content wow fadeInUp" data-wow-delay="0.3s">
                            <img class="img-fluid lazy" src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                 data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Create%20Profile.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div class="flex-split">
                    <div class="f-left wow fadeInUp f-invert-order" data-wow-delay="0.2s">
                        <div class="left-content">
                            <img class="img-fluid lazy" src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                 data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Companies%20Compete.png" alt=""/>
                        </div>
                    </div>

                    <div class="f-right wow fadeInUp" data-wow-delay="0.2s">
                        <div class="right-content">
                            <div class="stylishLine"></div>
                            <h2><span class="benefits-heading">Sit back while companies compete to hire you</span></h2>
                            <p class="key-differentiators">
                                Don’t waste your time reaching out to companies or dealing with recruiters.
                            </p>
                            <ul>
                                <li class="key-differentiators-list">‍<span
                                        class="key-differentiators-list-normal">💨</span> We fast-track your profile to
                                    hiring managers.
                                </li>
                                <li class="key-differentiators-list">‍<span class="key-differentiators-list-normal">🙆‍♂️</span>
                                    Get multiple interview requests with upfront salary offers within days.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="flex-split">
                    <div class="f-right">
                        <div class="right-content wow fadeInUp" data-wow-delay="0.2s">
                            <div class="stylishLine"></div>
                            <h2><span class="benefits-heading">Salary & Role transparency</span></h2>
                            <p class="key-differentiators">
                                Interview requests from companies mention salary and role details upfront - before you
                                decide to accept or decline them.
                            </p>
                        </div>
                    </div>
                    <div class="f-left">
                        <div class="left-content wow fadeInUp" data-wow-delay="0.3s">
                            <img class="img-fluid lazy" src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                 data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Transparency.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div class="flex-split">
                    <div class="f-left wow fadeInUp f-invert-order" data-wow-delay="0s">
                        <div class="left-content">
                            <img class="img-fluid lazy" src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                 data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Dedicated%20Talent%20Advocate.png" alt=""/>
                        </div>
                    </div>
                    <div class="f-right wow fadeInUp" data-wow-delay="0.2s">
                        <div class="right-content">
                            <div class="stylishLine"></div>
                            <h2><span class="benefits-heading" style={{color:"teal"}}>A dedicated talent advocate</span></h2>
                            <p class="key-differentiators">
                                Your Talent Advocate will guide you through the entire process. From polishing your
                                profile, providing interview tips to helping negotiate offers!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex-split">
                    <div class="f-right">
                        <div class="right-content wow fadeInUp" data-wow-delay="0.2s">
                            <div class="stylishLine"></div>
                            <h2><span class="benefits-heading" style={{color:"teal"}}>Current and past employers can’t see your profile</span>
                            </h2>
                            <p class="key-differentiators">
                                By default, we hide your profile from any employers that you list as your current and
                                past employer.
                            </p>
                            <ul>
                                <li class="key-differentiators-list">‍<span
                                        class="key-differentiators-list-normal">🕵</span> Privacy Assured
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="f-left">
                        <div class="left-content wow fadeInUp" data-wow-delay="0.3s">
                            <img class="img-fluid lazy" src="https://d383au3bye3rv1.cloudfront.net/static/images/lazy-placeholder.png"
                                 data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Privacy.png" alt=""/>
                        </div>
                    </div>
                </div>

            </div>

            <div class="testimonial-full-section">
                <div class="container" style={{position: "relative"}}>
                    <div class="testimonials-section" id="testimonials" >
                    <div class="testimonial-heading text-center" style={{paddingTop: "30px",paddingBottom:"30px"}}>

                        <div class="container">
                            <h1 class="wow fadeInUp" data-wow-delay="0s"
                                style={{visibility: "visible", animationDelay: "0s", animationName: "fadeInUp"}}>nERDS
                                Hire...X</h1>
                            <p class="wow fadeInUp" data-wow-delay="0.2s"
                               style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp", marginBottom: "0px;"}}>
                                A better love story than twilight. Check the video below to find out why.
                            </p>
                        </div>
                    </div>

                    <div class="row" style={{paddingTop: "30px;", paddingBottom: "30px;"}}>
                        <div class="col-md-6 mx-auto">

                            <div itemscope itemtype="https://schema.org/VideoObject">
                                <meta itemprop="uploadDate" content="Wed Dec 02 2020 14:54:51 GMT+0530 (IST)" />
                                <meta itemprop="name" content="Techies &lt;3 Hire...X" />
                                <meta itemprop="duration" content="PT2M56S" />
                                <meta itemprop="description" content="Candidates share their experience getting placed at top technology companies through Hire...X." />
                                <meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/CAQeMfpE-1920.jpg" />
                                <meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/CAQeMfpE-z2iSLiv8.mp4" />
                                <script src="https://cdn.jwplayer.com/players/CAQeMfpE-iV6E8Sg0.js"></script>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5 testimonial-group">
                        <div class="col-sm-4 card-borderless testimonial">
                            <div class="company">
                                <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/cred.png?123" />
                    
                            </div>
                            <div class="candidate">
                                <div class="image"> <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/yadhu_manoharan.jpg?123"/></div>
                                <div>
                                    <h4 class="candidate-name">Yadhu Manoharan
                                        <a href="https://www.linkedin.com/in/yadhu-manoharan-92020083/" target="_blank"><i
                                                class="fab fa-linkedin"></i></a>
                                    </h4>
                                    <span class="candidate-role">Sr. iOS Engineer</span>
                                </div>
                            </div>
                            <div class="testimonial-content">
                    
                                Hire...X was able to make the process really easy. They were able to schedule interviews
                                with the best companies in the industry and drove the entire process smoothly.
                            </div>
                        </div>
                        <div class="col-sm-4 card-borderless testimonial">
                            <div class="company">
                                <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/dream11.png?123" />
                            </div>
                            <div class="candidate">
                                <div class="image"> <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/santosh_nain.jpeg?123"/></div>
                                <div>
                                    <h4 class="candidate-name">Santosh Nain
                                        <a href="https://www.linkedin.com/in/santoshnain/" target="_blank"><i
                                                class="fab fa-linkedin"></i></a>
                    
                                    </h4>
                                    <span class="candidate-role">SDE-2</span>
                                </div>
                            </div>
                            <div class="testimonial-content">
                                A friend of mine told me about Hire...X when I started looking for new opportunities. The
                                Hire...X team was extremely helpful,
                                professional and quick with everything.
                            </div>
                        </div>
                        <div class="col-sm-4 card-borderless testimonial">
                            <div class="company">
                                <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/curefit.png?123" />
                            </div>
                            <div class="candidate">
                                <div class="image"> <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/tarun_dugar.jpeg?123" /></div>
                                <div>
                                    <h4 class="candidate-name">Tarun Dugar
                                        <a href="https://www.linkedin.com/in/tarundugar/" target="_blank"><i
                                                class="fab fa-linkedin"></i></a>
                                    </h4>
                                    <span class="candidate-role">Sr. Software Engineer</span>
                                </div>
                            </div>
                            <div class="testimonial-content">
                                Compared to other job portals, what stood out for me was that Hire...X,
                                on top of providing really good opportunities,
                                helped me in negotiations with the companies too.
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="container built-by-techies">
                <div class="cta-sub text-center no-color">
                    <div class="container">
                        <h1 class="wow fadeInUp" data-wow-delay="0s"
                            style={{visibility: "visible", animationDelay:" 0s;"}}>Built by
                            techies, for techies 👩‍💻👨‍💻</h1>
                        <p class="wow fadeInUp" data-wow-delay="0.2s"
                           style={{visibility: "visible;", animationDelay: "0.2s;", animationName: "fadeInUp;"}}>
                            It takes less than 5 minutes to sign up.
                        </p>
                        <a class="btn  btn-lg" href="/candidate/signup">Apply to
                            join</a>
                    </div>
                </div>
            </div>
        </div>

        <footer id="myFooter">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
            
                        <div class="mission">Hire...X is on a mission to make it dead simple for leading Indian startups
                            to hire the top 2% of tech talent.
                        </div>
                        <div class="social-networks">
                            <a href="https://twitter.com/@Hire...X_co" class="twitter" target="_blank" rel="noopener"><i
                                    class="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/Hire...X.co/" class="facebook" target="_blank"
                               rel="noopener"><i class="fab fa-facebook"></i></a>
                            
                            <a href="https://www.linkedin.com/company/Hire...X-co/" class="linkedin" target="_blank"
                               rel="noopener"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/Hire...X_co/" class="instagram" target="_blank"
                               rel="noopener"><i class="fab fa-instagram"></i></a>
                        </div>

                    </div>
                    <div class="col-sm-2">
                        <h5>Candidates</h5>
                        <ul>
                            <li><a href="/">For Candidates</a></li>
                            <li><a href="/candidate/signup">Candidate Sign Up</a></li>
                            <li><a href="/candidate/signup/referral-program">Invite &amp;
                                Earn ₹15k</a></li>
                            <li><a href="https://Hire...X.co/faq/candidate">Candidate FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>Employers</h5>
                        <ul>
                            <li><a href="/employers">For Employers</a></li>
                            <li><a href="/recruiter/signup">Employer Sign Up</a></li>
                            <li><a href="https://Hire...X.co/faq/employer">Employer FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="https://Hire...X.freshteam.com/jobs" target="_blank" rel="noopener">Careers</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/e/2PACX-1vSfNZzb0SBfMaYv9guvEZXuzR9fgj8J_lDSmN9maVmCRQewtIZRFl7Wq0qB2hmJNlOf2y8dV_s97U_6/pub">Privacy
                                    Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <p>© 2023 SPSG Hire...X. All Rights Reserved </p>
            </div>
        </footer>


    </div>

      

      
    </div>
  );
};

export default App;
