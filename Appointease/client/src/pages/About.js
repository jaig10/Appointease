import React, { useEffect } from "react";
import "./About.css";
function About() {
  // const dispatch = useDispatch();
  //   const aboutRender = async () =>{
  //     try {
  //       dispatch(showLoading());
  //       const response = await axios.post("/api/user/about",{}, {
  //         headers:{
  //           Authorization: `Bearer ${localStorage.getItem("token")}`
  //         },
  //       });
  //       dispatch(hideLoading());
  //       console.log(response);
  //       if (response.success) {
  //         toast.success(response.message)
  //       } else {
  //         toast.error(response.message);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       dispatch(hideLoading());
  //     }
  //   }

  // useEffect(() => {
  //   aboutRender();
  // }, []);

  let menu = document.querySelector("#menu-btn");
  let navbar = document.querySelector(".navbar");

  function change() {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  }

  window.onscroll = () => {
    menu?.classList.remove("fa-times");
    navbar?.classList.remove("active");
  };
  return (
    <div className="About">
      <header className="head">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-heartbeat" /> Appiontease{" "}
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#why">why us</a>
          <a href="#book">book</a>
          <a href="#review">review</a>
        </nav>
        <div id="menu-btn" className="fas fa-bars" onClick={() => change()} />
      </header>

      <section className="home" id="home">
        <div className="image">
          <img
            // src="https://healthmatch.io/assets/patient-celebrate.8c85d670.png"
            src={process.env.PUBLIC_URL + './images/Medstaff.png'}
            alt=""
          />
        </div>
        <div className="content">
          <h3>AppointEase</h3>
          <p className="book">“Book, Confirm, and Go!”</p>
          <p>Seamless Healthcare Access at Your Fingertips.</p>
          <a href="/login" className="btn">
            {" "}
            Let's go <span className="fas fa-chevron-right" />{" "}
          </a>
        </div>
      </section>

      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-user-md" />
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>
        <div className="icons">
          <i className="fas fa-users" />
          <h3>1000+</h3>
          <p>satisfied consultants</p>
        </div>
        <div className="icons">
          <i className="fas fa-procedures" />
          <h3>50+</h3>
          <p>Services</p>
        </div>
        <div className="icons">
          <i className="fas fa-hospital" />
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </section>

      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-heartbeat" />
            <h3>Heart Care</h3>
            <p>
              The term “heart disease” refers to several types of heart
              conditions that occurs in humnam being. The most common type of
              heart disease in the United States is coronary artery disease
              (CAD), which affects the blood flow to the heart. Decreased blood
              flow can cause a heart attack.{" "}
            </p>
          </div>
          <div className="box">
            <i className="fas fa-eye" />
            <h3>Eye care</h3>
            <p>
              An eye care professional is an individual who provides a service
              related to the eyes or vision. It is any healthcare worker
              involved in eye care, from one with a small amount of
              post-secondary training to practitioners with a doctoral level of
              education.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-teeth" />
            <h3>Dental Care</h3>
            <p>
              Oral hygiene is the practice of keeping one's mouth clean and free
              of disease and other problems by regular brushing of the teeth and
              cleaning between the teeth. It is important that oral hygiene be
              carried out on a regular basis to enable prevention of dental
              disease and bad breath
            </p>
          </div>
          <div className="box">
            <i className="fas fa-pills" />
            <h3>Meditation and Yoga</h3>
            <p>
              Yoga and meditation have both become increasingly popular in the
              Western world, and practitioners praise their psychological and
              physical benefits. Current research also suggests that meditating
              and doing yoga can boost overall well-being and resilience to
              stress factors. Essentially, meditation is a part of yoga, which
              is performed after Yoga asana practice.
            </p>
          </div>
          <div className="box">
            <i className="fas fa-save" />
            <h3>Blood Donation</h3>
            <p>
              What is the 4 requirements in donating blood? Weight: At least 110
              lbs (50 kg). Blood volume collected will depend mainly on you body
              weight. Pulse rate: Between 60 and 100 beats/minute with regular
              rhythm. Regular blood donation is linked to lower blood pressure
              and a lower risk for heart attacks. t definitely helps to reduce
              cardiovascular risk factors
            </p>
          </div>
          <div className="box">
            <i className="fas fa-water" />
            <h3>Nutrition care</h3>
            <p>
              Healthful eating also means replacing foods that contain trans
              fats, added salt, and sugar with more nutritious options.
              Following a healthful diet has many health benefits, including
              building strong bones, protecting the heart, preventing disease,
              and boosting mood. This article looks at the top 10 benefits of a
              healthful diet, and the evidence behind them.
            </p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + './images/about.png'}
              alt=""
            />
          </div>
          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>
              The success of hospitals and healthcare providers depends on the
              quality of their service. But in an age where most of us look up
              information online before making almost any decision, a
              well-designed healthcare website is no less important.
            </p>
            <p>
              Our mission is To create a user-friendly and efficient platform
              that revolutionizes the way patients schedule appointments with
              doctors, improving accessibility and convenience in the healthcare
              industry.
            </p>
          </div>
        </div>
      </section>

      <section className="about" id="why">
        <h1 className="heading">
          {" "}
          why <span>Appiontease</span> ?{" "}
        </h1>
        <div className="row">
          <div className="content">
            <p>
              Our doctors gain several benefits that enhance their practice and
              improve patient engagement. The app offers increased patient
              reach, allowing doctors to connect with a wider audience.By
              registering, doctors can also boost their online visibility,
              attract new patients, and build a positive reputation through
              patient feedback and reviews.
            </p>
            <p>
              the app provides convenient access to a wide range of doctors,
              allowing patients to easily find and choose healthcare providers
              based on their specialties, qualifications, and availability. By
              using the app, patients can save time and effort in scheduling
              appointments, as it offers a user-friendly interface for booking,
              rescheduling, and canceling appointments.
            </p>
            <a href="#services" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right" />{" "}
            </a>
          </div>
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + "/images/book.png"}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="book" id="book">
        <h1 className="heading">
          {" "}
          <span>book</span> now{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + "/images/why.png"}
              alt=""
            />
          </div>
          <div className="form">
            <p>
              With our Doctor Appointment Booking App, you can easily book
              appointments with top doctors in just a few clicks. Take control
              of your healthcare journey and enjoy a user-friendly platform that
              streamlines the process. Book now to secure your spot
            </p>
            <a href="/login" className="btn">
              {" "}
              Let's go <span className="fas fa-chevron-right" />{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          Client's <span>Review</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/pic-1.png" alt="" />
            <h3>John Deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p className="text">
              “…Thank you so much for your help. I would highly recommend you
              and Medicare Group to any healthcare organization that is looking
              to improve their company. It has been a pleasure working with
              you…our business is much more organized, thanks to you…your
              marketing advice has been very beneficial…”
            </p>
          </div>
          <div className="box">
            <img src="image/pic-2.png" alt="" />
            <h3>Millia Chinong</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p className="text">
              Great experience as a first timer. I barely waited to be helped
              when I checked in. The staff and Dr. Ajay Kumar were all very
              friendly and helpful. I especially loved how Dr. Ajay really took
              his time to explain my conditions with me as well as my treatment
              options. I had a great visit and the doctor’s demeanor has really
              put me at ease so I highly recommend this clinic.
            </p>
          </div>
          <div className="box">
            <img src="image/pic-3.png" alt="" />
            <h3>Harry Hudson</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p className="text">
              Great medical office, wonderful and warm experience from start to
              finish. Appreciate Dr. Sanjay taking time to go over the diagnosis
              clearly and treatment options. Was referred over by my general
              doctor and can see why. Highly recommended.
            </p>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> services{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> about{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> doctors{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> book{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> review{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> blogs{" "}
            </a>
          </div>
          <div className="box">
            <h3>our services</h3>
            <a href="#services">
              {" "}
              <i className="fas fa-chevron-right" /> HeartCare
            </a>
            <a href="#services">
              {" "}
              <i className="fas fa-chevron-right" /> EyeCare{" "}
            </a>
            <a href="#services">
              {" "}
              <i className="fas fa-chevron-right" /> DentalCare{" "}
            </a>
            <a href="#services">
              {" "}
              <i className="fas fa-chevron-right" /> SoulCare{" "}
            </a>
            <a href="#services">
              {" "}
              <i className="fas fa-chevron-right" /> Blood Donation{" "}
            </a>
            <a href="#services">
              {" "}
              <i className="fas fa-chevron-right" /> NutritionCare{" "}
            </a>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone" /> +123-456-7890{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone" /> +111-222-3333{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope" /> dummy@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope" /> abcdef@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt" /> jharkhand, india - 400104{" "}
            </a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f" /> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter" /> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram" /> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin" /> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-pinterest" /> pinterest{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
