import { ContactUs, Footer, Navbar } from "../components";
import styles from "../style";

const Contactuspage = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} {${styles.flexCenter}} shadow-lg `}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      {/* hero */}

      <ContactUs />

      <div className={`  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contactuspage;
