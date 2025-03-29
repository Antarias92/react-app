import React from "react";
import "./Contact.css";

const Contact = () => {
    return(
        <div className="container-fluid email_form col col-12 col-sm-6 offset-sm-3">
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