import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    setData((oldObj) => {
      return {
        ...oldObj,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${data.fullname} \nPhone number : ${data.phone} \nEmain : ${data.email} \nMessage : ${data.message}`)
  };

  return (
    <>
      <div className="my-5">
        <h1 className=" text-center">Contact</h1>
      </div>

      <div className="container contact_div ">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="fullName" class="form-label">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Name"
                />
              </div>

              <div class="mb-3">
                <label for="Phone" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="Phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Phone"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="Type here.."
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
