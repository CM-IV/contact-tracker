import { Layout } from "../layouts/layout";
import { EditContacts } from "../components/editContacts";

const ContactEditor = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Edit a Contact by ID</h1>
      </section>
      <EditContacts />
    </Layout>
  );
};

export { ContactEditor };