import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import _ from "lodash";

export default function WeiboCard() {
  const images = [
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  ];
  const chunkImages = _.chunk(images, 3);
  return (
    <Card
      actions={[
        <div>
          <CommentOutlined key="comment"></CommentOutlined>18
        </div>,
        <div>
          <LikeOutlined key="like"></LikeOutlined>18
        </div>,
      ]}
      style={{ width: 600 }}
    >
      {" "}
      <Card.Meta
        style={{ marginBottom: 10 }}
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={"@24combo"}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Row justify="center">
        <Col>
          {chunkImages.map((item) => (
            <Row gutter={[8, 8]} justify="start">
              {item.map((ele) => (
                <Col style={{ width: 150, overflow: "hidden" }}>
                  <img src={ele}></img>
                </Col>
              ))}
            </Row>
          ))}
        </Col>
      </Row>
    </Card>
  );
}
