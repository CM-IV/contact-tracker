import axios from "axios";
import { Link } from "wouter-preact";
import { useEffect, useState } from "preact/hooks";
import { Paginator } from "../components/paginator";
import { Fragment } from "preact";

const GetContacts = () => {
  const [contactData, setContactData] = useState<Contacts[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isPaginated, setIsPaginated] = useState(0);

  const fetchContacts = () => {
    axios.get(`/contacts/?page=${page}`)
      .then((res) => {
        return res.data;
      })
      .then((contacts) => {
        setContactData(contacts.data);
        setIsPaginated(contacts.meta.total);
        setLastPage(contacts.meta.last_page);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const deleteRow = async (id: string) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`contacts/${id}`, {});

      setContactData(contactData.filter((c: Contacts) => c.id !== id));
    }
  };

  return (
    <Fragment>
      <section class="hero is-link">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Contact Lead Tracker</h1>
            </div>
        </div>
      </section>
      {isPaginated > 0 && (
        <section class="section">
          <div class="table-container">
            <table class="table is-bordered">
              <thead>
                <tr>
                  <th>UUID</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>PhoneNumber</th>
                  <th>WorkPlace</th>
                  <th>Notes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {contactData.map((c: Contacts) => {
                      return (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.workPlace}</td>
                            <td>{c.notes}</td>
                            <td>
                                <div class="level">
                                <div class="level-item">
                                  <Link
                                  to={`/contacts/${c.id}/edit`}
                                  class="button is-small"
                                  >
                                  Edit
                                  </Link>
                                </div>
                                <div class="level-item">
                                    <button
                                    class="button is-small"
                                    onClick={() => deleteRow(c.id)}
                                    >
                                    Delete
                                    </button>
                                </div>
                                </div>
                            </td>
                        </tr>
                      );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {isPaginated > 5 && (
        <Paginator 
          page={page}
          lastPage={lastPage}
          pageChanged={(page) => setPage(page)}
        />
      )}
    </Fragment>
  )
}


export { GetContacts };