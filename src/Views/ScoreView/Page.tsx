import ScoreView from "./ScoreView";
import Layout from "../Layout/Layout";
import PagesTransition from "src/Components/PagesTransition/PagesTransition";
export default function ScoreViewPage({ route,navigation }) {
  return (
    <PagesTransition style={{flex:1, width:"100%"}}>
      <Layout>
        <ScoreView route={route} navigation={navigation} />
      </Layout>
    </PagesTransition>
  );
}
