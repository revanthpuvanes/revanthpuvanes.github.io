AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Process Associate",
    cardImage: "assets/images/experience-page/prochant.png",
    place: "Prochant - Coimbatore",
    time: "(Feb, 2023 - May, 2024)",
    desp: "<li>Writing and executing Equipment Qualification & Process validation.</li> <li>Data collection, analysis, and statistical treatment</li> <li>Understanding of equipment design, validation, and change control process</li> <li>Reporting quality assurance team of production flaws</li>",
  },
  // {
  //   title: "Software Tester",
  //   cardImage: "assets/images/experience-page/idealmindz.jpg",
  //   place: "Idealmindz - Coimbatore",
  //   time: "(Feb, 2022 - Feb, 2023)",
  //   desp: "<li>We describe the test environment, including hardware, software, and configurations in the Test Plan.</li> <li>We create test scenarios aligned with user stories in Agile projects while preparing Test Designs.</li>",
  // },
  {
    title: "Consultant Data Scientist",
    cardImage: "assets/images/experience-page/iqg.jpeg",
    place: "iQGateway - Bangalore",
    time: "(Oct, 2021 - Jan, 2022)",
    desp: "<li>Worked towards Auto-ML product.</li> <li>Worked on Vehicle Routing Problem by implementing evolutionary algorithms by research papers.</li> <li>Reverse engineered with model-describer library to analyze black box models.</li>",
  },
  {
    title: "Machine Learning Engineer",
    cardImage: "assets/images/experience-page/gloify.jfif",
    place: "Gloify - Bangalore",
    time: "(May, 2021 - Jul, 2021)",
    desp: "<li>Developed an Visual Search Engine for e-commerce.</li><li>Users can search with their images rather than text for products they are looking for.</li><li>Developed a model for reading facial attributes of an user with a responding NLP chatbot with WebRtc.</li>",
  },
  {
    title: "Data Science Consultant",
    cardImage: "assets/images/experience-page/rubixe.jpg",
    place: "Rubixe - Bangalore",
    time: "(Aug, 2020 - Jan, 2021)",
    desp:"<li>Derived data driven solutions for several data science projects.</li><li>Worked on several data science products ranging from telecom churn to ficzon sales prediction.</li>",
  },
  {
    title: "Web Developer Trainee",
    cardImage: "assets/images/experience-page/kappsoft.jpg",
    place: "Kappsoft - Coimbatore",
    time: "(Jul, 2019 - Dec, 2019)",
    desp:"<li>Worked on API integration and developed functionality for systems using APIs</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Deep Learning",
    cardImage: "assets/images/experience-page/dl.jpg",
    description:
      "Advanced",
  },
  {
    title: "Computer Vision",
    cardImage: "assets/images/experience-page/cv.png",
    description:
      "Expert",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/experience-page/ml.jpg",
    description:
      "Advanced",
  },
  {
    title: "NLP",
    cardImage: "assets/images/experience-page/nlp.png",
    description:
      "Beginner",
  },
  {
    title: "Tensorflow",
    cardImage: "assets/images/experience-page/tensorflow.png",
    description:
      "Advanced",
  },
  {
    title: "Keras",
    cardImage: "assets/images/experience-page/keras.png",
    description:
      "Expert",
  },
  {
    title: "OpenCV",
    cardImage: "assets/images/experience-page/opencv.png",
    description:
      "Expert",
  },
  {
    title: "Python",
    cardImage: "assets/images/experience-page/python.png",
    description:
      "Expert",
  },
  {
    title: "AWS",
    cardImage: "assets/images/experience-page/aws.jpg",
    description:
      "Beginner",
  },
  {
    title: "Tableau",
    cardImage: "assets/images/experience-page/tableau.png",
    description:
      "Beginner",
  },
  {
    title: "Researcher",
    cardImage: "assets/images/experience-page/res.jpg",
    description:
      "Expert",
  },
  {
    title: "Git",
    cardImage: "assets/images/experience-page/git.png",
    description:
      "Intermediate",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 400px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "HackerRank",
    subtitle: "Programmer",
    image: "assets/images/experience-page/HackerRank.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  // {
  //   title: "HackerRank",
  //   subtitle: "Programmer",
  //   image: "assets/images/experience-page/HackerRank.png",
  //   // desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  // },
  {
    title: "Kaggle",
    subtitle: "Contributor",
    image: "assets/images/experience-page/kaggle.png",
    // desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "HackerEarth",
    subtitle: "Programmer",
    image: "assets/images/experience-page/hackerearth.jpg",
    // desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  // {
  //   title: "PitchTeen",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/pitchteen.png",
  //   desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  // },
  // {
  //   title: "Hack-A-Solution",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hackasolution.png",
  //   desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  // },
  // {
  //   title: "UniGlobe Hacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/uniglobe.png",
  //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  // },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  // }
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
           
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);


{/* <div class="blog-slider__text">${desp}</div>
<a href="#" class="blog-slider__button">Read More</a>  */}
// for line 235