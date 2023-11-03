import {Navbar,Hero, Stats,Services,News ,CardDeal,Testimonials,Clients,CTA,Footer} from './components';
import styles from  './style';


const App = () => (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} {${styles.flexCenter}} shadow-lg `}>
        <div className={`${styles.boxWidth} `}>
          <Navbar/>
        </div>
      </div>

      {/* hero */}

      <div className={`  ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div> 
      
      
       <div className={` ${styles.paddingX} ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          <News /> 
          <Services />
          <Stats />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
      

    </div>

  );


export default App