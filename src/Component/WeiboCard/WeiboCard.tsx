import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import _ from "lodash";
import HtmlParser from "react-html-parser";
import ReactPlayer from "react-player";
type CardProps = {
  weibo: any;
  children: React.ReactNode;
};

const getVideoUrl = (url: string): string => {
  const urlNoQuery = url.split("?")[0];
  const fileName = urlNoQuery.split("/").pop();
  return `http://localhost/videos/${fileName}`;
};

export default function WeiboCard(props: CardProps) {
  const { weibo } = props;
  const chunkImages: string[][] = _.chunk(weibo.pics);
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
      style={{ width: "100%" }}
    >
      {" "}
      <Card.Meta
        style={{ marginBottom: 10 }}
        avatar={<Avatar src={weibo.user.avatarHd} />}
        title={`@${weibo.user.screenName}`}
        description={HtmlParser(weibo.text)}
      />
      {weibo.pics && (
        <Row justify="center">
          <Col>
            {chunkImages.map((item) => (
              <Row gutter={[8, 8]} justify="start">
                {item.map((ele) => (
                  <Col key={ele} style={{ width: 150, overflow: "hidden" }}>
                    <img src={ele}></img>
                  </Col>
                ))}
              </Row>
            ))}
          </Col>
        </Row>
      )}
      {weibo.pageInfo && (
        <Row justify="center">
          <Col>
            <ReactPlayer
              type="video/mp4"
              style={{ marginLeft: 30 }}
              width={500}
              url={getVideoUrl(weibo.pageInfo.url)}
              controls={true}
            />
          </Col>
        </Row>
      )}
    </Card>
  );
}
