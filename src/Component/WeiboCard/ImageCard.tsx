import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import _ from "lodash";
import HtmlParser from "react-html-parser";
type ImageCardProps = {
  weibo:any
}

export default function ImageCard(props:ImageCardProps) {
  const {weibo} =  props;
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
      style={{ width: '100%' }}
    >
      {" "}
      <Card.Meta
        style={{ marginBottom: 10 }}
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={`@${weibo.user.screenName}`}
        description={HtmlParser(weibo.text)}
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
