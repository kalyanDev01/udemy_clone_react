import sale_image from "../assets/images/sale_image.jpg";

function SaleImg(){
  return(
    <div class="sale-img">
        <img src={sale_image} alt='sale_image' />
        <div class="sale-img__offer">
            <h2>Udemy Flash Sale! 24 hours to save</h2>
            <p>Get the top courses for 449</p>
        </div>
    </div>
  )
}
export default SaleImg;