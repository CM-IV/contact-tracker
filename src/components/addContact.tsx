import { Fragment } from "preact";
import { useState } from "preact/hooks";
import axios from "axios";

const AddContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = (e: Event) => {

    e.preventDefault();

    axios.post("/contacts", {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        workPlace: workPlace,
        notes: notes
    })
      .then((res) => {
        setSuccess(true);
        return res.data;
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  return (
    <Fragment>
      <section class="section">
        <div class="box">
        {error && (
            <div class="notification is-danger">
                <p>There was an error, refresh the page and try again.</p>
            </div>
        )}
        {success && (
          <div class="notification is-success">
              <p>Your contact was added!</p>
          </div>
        )}
          <p class="subtitle">Add a contact</p>
          <form onSubmit={submit}>
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Contact First Name"
                  onChange={(e) => setFirstName(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Contact Last Name"
                  onChange={(e) => setLastName(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Phone Number</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Contact Phone Number"
                  onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Work Place</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Contact Work Place"
                  onChange={(e) => setWorkPlace(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Notes</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Contact Notes"
                  onChange={(e) => setNotes(e.currentTarget.value)}
                  required
                />
              </div>
            </div>

            <div class="field">
              <div class="loginButton">
                <button class="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export { AddContact };