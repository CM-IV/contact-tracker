import { Layout } from "../layouts/layout";
import { GetContacts } from "../components/getContacts";
import { AddContact } from "../components/addContact";

const Home = () => {
  return (
    <Layout>
      <GetContacts />
      <AddContact />
    </Layout>
  )
}


export { Home };