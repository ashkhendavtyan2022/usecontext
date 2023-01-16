import "./style.css"
import { useGlobalContext } from "../../Context";

export const EditPage = () => {
    //I import only those that I need
  const { user, setUser, memory, setMemory } = useGlobalContext();

  const handleSubmit = (e) => {
  e.preventDefault();
  
      //e.target is an object so I get the variables by destructuring
  const {
        firstname: { value: firstName },
        lastname: { value: lastName },
        age: { value: age },
        gender: { value: gender },
        position: { value: position },
        email: { value: email },
        phone: { value: phone },
        birth: { value: birth },
        picture,
  } = e.target;
  
      setUser({
        firstName,
        lastName,
        age,
        gender,
        position,
        email,
        phone,
        birth,
        profileIMG: picture.files[0],
      });
  
      // this is how to set the value : setUser(prev=>{return {...prev, age}})
  
      //reset the form by this command , e.target is the form
      e.target.reset();
    };


  return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="form-divs">
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  name="firstname"
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  name="lastname"
                />
              </div>
              <div>
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  name="age"
                  className="input"
                  placeholder="Age"
                />
              </div>
              <div>
                <label htmlFor="">Gender</label>
                <div className="gender-box">
                  <span>
                    <input
                      type="radio"
                      className="gender"
                      name="gender"
                      value="male"
                    />
                    <label htmlFor="">Male</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      className="gender"
                      name="gender"
                      value="female"
                    />
                    <label htmlFor="">Female</label>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-divs">
              <div>
                <label htmlFor="">Position</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Position"
                  name="position"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="">Date of Birth</label>
                <input
                  type="date"
                  name="birth"
                  className="input"
                  placeholder="dd.mm.yy"
                  aria-describedby="date-format"
                  min="1900-03-01"
                  max="2031-01-01"
                />
              </div>
              <div>
                <p>Profile Image</p>
                <input
                  type="file"
                  className="input file-upload"
                  name="picture"
                  accept="image/*"
                ></input>
              </div>
              <button className="form-button">Submit Changes</button>
            </div>
          </div>
        </form>
      </div>
  );

};
  