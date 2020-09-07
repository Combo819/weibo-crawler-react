import React from "react";
import { Col, Row, Card } from "antd";
import { WeiboCard } from "../../Component/WeiboCard";

function Weibo(Props: React.Props<any>) {
  return (
    <Row justify="center" align="middle">
      <Col>
        <Row>
          <Col>
            <Card><WeiboCard></WeiboCard></Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Weibo;
