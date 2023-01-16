import "./style.css";
import { useGlobalContext } from "../../Context";


export const Header = () => {
  const { user } = useGlobalContext();
  const { firstName, lastName, position, profileIMG } = user;

  return (
    <div className="header-component">
      <div className="img-div">
        {
          //Use URL.createObjectURL(...imgFromContext) to add image from local
          profileIMG && (
            <img src={URL.createObjectURL(profileIMG)} alt="Profile IMG" />
          )
        }
      </div>
      <div className="details-div">
        <p>
          {firstName} {lastName}
        </p>
        <p>{position}</p>
      </div>
    </div>
  )
};
