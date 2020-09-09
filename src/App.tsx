import React,{useEffect,useState} from "react";
import "./App.css";
import { Layout, Menu, Button } from "antd";
import {Switch,Route} from 'react-router-dom';
import { routes } from "./Routes";
import {getWeibosApi} from './Api'
const { Header, Content, Footer } = Layout;

function App(): JSX.Element {
 
  return (
    <Layout>
      <Header
        style={{
          background: "white",
        }}
      >
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <Button>save</Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Switch>
          {routes.map(
            (item): React.ReactNode => {
              return (
                <Route path={item.path}>
                  <item.component></item.component>
                </Route>
              );
            }
          )}
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
