import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.jfif";
import image9 from "../assets/images/image9.jfif";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.jfif";
function Popular(){
  return(
    <div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={image5} alt="course-image5" />
                <h3>Java Masterclass</h3>
                <p>Col Steele</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>₹499</del></p>
            </div>
            <div class="course-card">
                <img src={image6} alt="course-image6" />
                <h3>Angular & NestJS Full Stack Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>₹1449 <del>₹10499</del></p>
            </div>
            <div class="course-card">
                <img src={image7} alt="course-image7" />
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹5449 <del>₹14499</del></p>
            </div>
            <div class="course-card">
                <img src={image8} alt="course-image8" />
                <h3>Prompt Engineering 2023</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>₹1449 <del>₹5499</del></p>
            </div>
            <div class="course-card">
                <img src={image9} alt="course-image9" />
                <h3>Algorithmic Problem Solving</h3>
                <p>Col Steele</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1499</del></p>
            </div>
            <div class="course-card">
                <img src={image10} alt="course-image10" />
                <h3>Git by example</h3>
                <p>Col Steele</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>₹5449 <del>₹14499</del></p>
            </div>
            <div class="course-card">
                <img src={image11} alt="course-image11" />
                <h3>Apache Maven: Beginner to Guru</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹5449 <del>₹14499</del></p>
            </div>
            <div class="course-card">
                <img src={image12} alt="course-image12" />
                <h3>Basic to advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>₹1449 <del>₹5499</del></p>
            </div>
        </div>
    </div>
  )
}
export default Popular;