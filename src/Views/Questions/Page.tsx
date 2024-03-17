import Questions from "./Questions";
import Layout from "../Layout/Layout";
import PagesTransition from "src/Components/PagesTransition/PagesTransition";
export default function QuestionsPage({ navigation }) {
  return (
    <PagesTransition style={{ flex: 1, width: "100%" }}>
      <Layout>
        <Questions navigation={navigation} />
      </Layout>
    </PagesTransition>
  );
}
