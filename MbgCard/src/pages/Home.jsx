import {
    Navbar,
    Hero,
    Stats,
    Services,
    News,
    Testimonials,
    Certificate,
    Awards,
    Footer,
    Featured,
    Pricing,
    Faq,
    VidTestimonials,
  } from "../components";
  
  import styles from "../style";
  
  const Home = () => (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} {${styles.flexCenter}} shadow-lg `}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
  
      {/* hero */}
  
      <div className={`  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
  
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <News />
          <Services />
          <Featured />
          <Awards />
          <Certificate />
          <VidTestimonials/>
          {/* <Testimonials /> */}
          <Stats />
        </div>
      </div>
  
      <div className={`  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Pricing />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
  
  export default Home;
  