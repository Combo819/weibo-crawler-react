import React from "react";
import { Col, Row, Card } from "antd";
import { ImageCard } from "../../Component/WeiboCard";

function Weibo(Props: React.Props<any>) {
  return (
    <Row justify="center" align="middle">
      <Col>
        <Row>
          <Col>
            <Card><ImageCard></ImageCard></Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Weibo;
