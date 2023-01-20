import React from "react";
import "./style.css"
import { useGlobalContext } from "../../Context";
import { SetUser } from "../../Platform/Api";
import { useEffect } from "react";

export const EditPage = () => {
    //I import only those that I need
  const { user, setUser, memory } = useGlobalContext();

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
      SetList();

    };



    const SetList = async () => {
      const result = await SetUser(user)
      if(result.data) {
        console.log(result.data)
      } else {
        console.log("error")
      }
    };

    useEffect( () => {
      SetList(user)
    }, [user])
    
    console.log(user)
    // memory.push(user)
    // console.log(memory)

  return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="form-divs">
              <div>
                <label htmlFor="">First Name</label>
                <input
                  required
                  type="text"
                  className="input"
                  placeholder="First Name"
                  name="firstname"
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  required
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  name="lastname"
                />
              </div>
              <div>
                <label htmlFor="">Age</label>
                <input
                  required
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
                      required
                      type="radio"
                      className="gender"
                      name="gender"
                      value="male"
                    />
                    <label htmlFor="">Male</label>
                  </span>
                  <span>
                    <input
                      required
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
                  required
                  type="text"
                  className="input"
                  placeholder="Position"
                  name="position"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="">Date of Birth</label>
                <input
                  required
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
                  required
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
  