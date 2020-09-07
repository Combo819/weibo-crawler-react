import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import _ from "lodash";
import CardProto from "./WeiboCard";
type ImageCardProps = {
  weibo: any;
};

export default function ImageCard(props: ImageCardProps) {
  const { weibo } = props;
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
    <CardProto weibo={weibo}>
      {chunkImages.map((item) => (
        <Row   gutter={[8, 8]} justify="start">
          {item.map((ele) => (
            <Col key={ele} style={{ width: 150, overflow: "hidden" }}>
              <img src={ele}></img>
            </Col>
          ))}
        </Row>
      ))}
    </CardProto>
  );
}
