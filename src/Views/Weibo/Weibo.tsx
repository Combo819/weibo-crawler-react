import React from "react";
import { Col, Row, Pagination } from "antd";
import { ImageCard, VideoCard } from "../../Component/WeiboCard";

function Weibo(Props: React.Props<any>) {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <Row className="mt-5">
            <Col>
              <ImageCard></ImageCard>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <VideoCard></VideoCard>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" align='middle'>
        <Col className="d-flex flex-row-reverse" span={8}>
          <Pagination className="p-2"></Pagination>
        </Col>
      </Row>
    </>
  );
}

export default Weibo;
