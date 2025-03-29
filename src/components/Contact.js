import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    return(
        <div className="container-fluid email_form">
          <form action="https://formspree.io/f/xrbbnlrd" method="post">
            <div class="row">
                <div class="col mb-3 form-floating">
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name" required/>
                  <label for="contact-email" class="form-label ms-3">First name</label>
                </div>
                <div class="col mb-3 form-floating">
                  <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required/>
                  <label for="contact-email" class="form-label ms-3">Last name</label>
                </div>
                <div class="mb-3 form-floating">
                    <input type="email" class="form-control" id="contact-email" name="contact-email" aria-label="E-mail" placeholder="E-mail" required/>  
                    <label for="contact-email" class="form-label ms-3">E-mail</label>
                </div>
                <div class="mb-3">
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option selected>Nature of this message</option>
                        <option value="1">Professional</option>
                        <option value="2">Casual</option>
                      </select>
                      <label for="message" class="form-label">Message</label>
                      <textarea class="form-control" id="message" rows="4" name="message" required></textarea>
                </div>
                <div class="mb-3 form-check d-grid col-6 mx-auto">
                    <button type="submit" class="btn btn-dark">SUBMIT MESSAGE</button>
                </div>
            </div>
          </form>
          <hr class="opacity-25"/>
        </div>
    );
}

export default Contact