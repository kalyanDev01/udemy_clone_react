import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
function Recommended(){
  return(
    <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={image1} alt="course-image1" />
                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>Col Steele</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>₹1499</del></p>
            </div>
            <div class="course-card">
                <img src={image2} alt="course-image2" />
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>₹1449 <del>₹10499</del></p>
            </div>
            <div class="course-card">
                <img src={image3} alt="course-image3" />
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹5449 <del>₹14499</del></p>
            </div>
            <div class="course-card">
                <img src={image4} alt="course-image4" />
                <h3>Basic to advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>₹1449 <del>₹5499</del></p>
            </div>
        </div>
    </div>
  )
}

export default Recommended;