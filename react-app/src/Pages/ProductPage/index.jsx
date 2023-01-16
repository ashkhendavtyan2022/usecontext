import "./style.css";
import { useGlobalContext } from "../../Context";
  
export const ProductPage = () => {

    const { user } = useGlobalContext();

    const { birth, phone, email, gender, age, position, lastName, firstName, profileIMG } =
      user;

    return (
      <div className="product-container">
        <h2>Profile Details</h2>
        <div className="product-box">
          <div className="person-img">
                {
                    // to add image from local, I used URL.createObjectURL(...imgFromContext)
                    profileIMG && (
                      <img src={URL.createObjectURL(profileIMG)} alt="Profile IMG" />
                    )
                  }
          </div>
          <div className="other-details">
            <div>
                Name: {firstName} {lastName}
            </div>
            <div>Position: {position}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Date of Birth: {birth}</div>
          </div>
          
        </div>
    </div>
    )
};
  