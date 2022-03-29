import { Layout } from "../layouts/layout";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";
import { Paginator } from "../components/paginator";

const Home = () => {
  const [contactData, setContactData] = useState<Contacts[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isPaginated, setIsPaginated] = useState(0);

  const getContacts = () => {
    axios.get(`contacts/?page=${page}`)
      .then((res) => {
        return res.data;
      })
      .then((contacts) => {
        setContactData(contacts.data);
        setIsPaginated(contacts.meta.total);
        setLastPage(contacts.meta.last_page);
        console.log(contacts.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getContacts();
  }, [page])

  return (
    <Layout>
      <section class="section">
        <h1 class="title">Hello!</h1>
        <h2 class="subtitle">Here are some contact leads:</h2>
      </section>
      
      {contactData.map((contacts) => {
        return (
          <div class="box" key={contacts.id}>
            <h3 class="subtitle"><strong>First: </strong>{contacts.firstName}</h3>
            <h3 class="subtitle"><strong>Last: </strong>{contacts.lastName}</h3>
            <p><strong>Notes: </strong>{contacts.notes}</p>
          </div>
        )
      })}
      {isPaginated > 5 && (
        <Paginator
          page={page}
          lastPage={lastPage}
          pageChanged={(page) => setPage(page)}
        />
      )}
    </Layout>
  )
}


export { Home };