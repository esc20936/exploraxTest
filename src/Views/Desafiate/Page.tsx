import Desafiate from "./Desafiate";
import Layout from "../Layout/Layout";
import PagesTransition from "src/Components/PagesTransition/PagesTransition";
export default function DesafiatePage({ navigation }) {
  return (
      <Layout>
        <Desafiate navigation={navigation} />
      </Layout>
  );
}
