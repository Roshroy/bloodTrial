import React from "react";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <div class="card-header py-3">
                <h2 className="mb-200">Register As Donor</h2>
              </div>
              <form>
                <form>
                  <div class="row mb-4">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form7Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form7Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form7Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form7Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="row">
                  <div class="col">
                    <div class="col-md-6 mb-4 d-flex align-items-center">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="col-md-6 mb-4 d-flex align-items-center">
                      <label for="inputPassword4">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    data-mdb-input-mask="+48 999-999-999"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Address </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <select class="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-4">
                    <select class="select">
                      <option value="1">District</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-4">
                    <select class="select">
                      <option value="1">Blood Group</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>
                  </div>
                </div>



                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
