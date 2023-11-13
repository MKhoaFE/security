import "./App.css";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import SiderComponent from "./components/SiderComponent";
import GetFilm from "./screens/GetFilm";
import GetActor from "./screens/GetActor";


const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout
        style={{
          height: "100vh",
          width: "60vw",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        <HeaderComponent/>
        <Layout style={{backgroundColor:"white"}}>
          <SiderComponent/>
          <Content>
              <Routes>
                <Route path='/getFilm' element={<GetFilm />} />
                <Route path='/getActor' element={<GetActor />} />
                <Route path='*' element={<GetFilm />} />
              </Routes>
            </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
