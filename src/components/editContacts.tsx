import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "wouter-preact";
import axios from "axios";


const EditContacts = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [workPlace, setWorkPlace] = useState("");
    const [notes, setNotes] = useState("");
    const [location, _setLocation] = useLocation();
    let id: string;

    let url = location;

    id = url.split("/")[2].substring(0, 36);

    const getContactById = () => {

        axios.get(`contacts/${id}`)
            .then((res) => {
                return res.data;
            })
            .then((contact) => {
                setFirstName(contact.firstName);
                setLastName(contact.lastName);
                setPhoneNumber(contact.phoneNumber);
                setWorkPlace(contact.workPlace);
                setNotes(contact.notes);
            })
            .catch((err) => {
                console.error(err);
            })

    }

    useEffect(() => {
        getContactById();
    }, []);

    const submit = (e: Event) => {
        e.preventDefault();

        alert("Contact updated!");

        axios.put(`contacts/${id}`, {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            workPlace: workPlace,
            notes: notes
        })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <Fragment>
            <section class="section">
                <p class="subtitle">Update a contact</p>
                <form onSubmit={submit}>
                    <div class="field">
                        <label class="label">First Name</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Last Name</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Phone Number</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Work Place</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={workPlace}
                            onChange={(e) => setWorkPlace(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Notes</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={notes}
                            onChange={(e) => setNotes(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <button class="button is-primary" type="submit">
                        Save
                    </button>
                </form>
            </section>
        </Fragment>
    )

}


export { EditContacts };