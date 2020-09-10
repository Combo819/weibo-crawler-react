import React, { useState }  from "react";
import "./App.css";
import { Layout, Menu, Button } from "antd";
import {Switch,Route} from 'react-router-dom';
import { routes } from "./Routes";
import {SaveWeiboModal} from './Component/Modal'
const { Header, Content, Footer } = Layout;

function App(): JSX.Element {
  const [isSaveModalVisible,setSaveModalVisible] = useState(false);
 
  return (
    <Layout>
      <Header
        style={{
          background: "white",
        }}
      >
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <Button onClick={()=>{setSaveModalVisible(true)}} >save</Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Switch>
          {routes.map(
            (item): React.ReactNode => {
              return (
                <Route path={item.path} render={(props:any)=><item.component {...props}></item.component>}>
                  
                </Route>
              );
            }
          )}
        </Switch>
      </Content>
      <SaveWeiboModal visible={isSaveModalVisible} closeModal={()=>{setSaveModalVisible(false)}}></SaveWeiboModal>
    </Layout>
  );
}

export default App;
