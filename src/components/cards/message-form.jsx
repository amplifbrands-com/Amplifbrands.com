import React, { useEffect, useState } from "react";
import { serviceData } from "../../assets/service-card-data";
import "../../styles/mess-form.css";
// this is the code for the message form

function Form() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile_no: "",
    email_id: "",
    company_name: "",
    location: "",
    how_did_you_hear: "",
    service_selected: "",
    user_requirement: "",
  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const checkAllFieldsFilled = () => {
    return (
      userInfo.name &&
      userInfo.mobile_no &&
      userInfo.email_id &&
      userInfo.company_name &&
      userInfo.location &&
      userInfo.how_did_you_hear &&
      userInfo.service_selected !== "not" &&
      userInfo.user_requirement
    );
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setAllFieldsFilled(checkAllFieldsFilled());
  }, [userInfo]);

  return (
    <form>
      <div className="user-info">
        <input
          type="text"
          placeholder="name"
          required
          name="name"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="mobile"
          required
          name="mobile_no"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email ID"
          required
          name="email_id"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="company name"
          required
          name="company_name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="location"
          required
          name="location"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="how did you hear about us"
          required
          name="how_did_you_hear"
          onChange={handleChange}
        />
      </div>
      <select name="service_selected" id="" onChange={handleChange}>
        <option value="not" default>
          How can we help you? (Select option)
        </option>
        {serviceData.map((cont) => (
          <option value={cont.title} key={cont.title}>
            {cont.title}
          </option>
        ))}
      </select>
      <textarea
        name="user_requirement"
        id=""
        cols="30"
        rows="2"
        placeholder="describe your requirement"
        onChange={handleChange}
      ></textarea>
      <button
        type="button"
        className="cta-btn"
        disabled={!allFieldsFilled}
        onClick={() => console.log(userInfo)}
      >
        submit
      </button>
    </form>
  );
}

export default Form;
