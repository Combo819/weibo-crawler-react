import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
import HtmlParser from "react-html-parser";
type VideoCardProps = {
  weibo: any;
};
export default function VideoCard(props: VideoCardProps) {
  const { weibo } = props;
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
        avatar={
          <Avatar src={weibo.user.profileImageUrl} />
        }
        title={`@${weibo.user.screenName}`}
        description={HtmlParser(weibo.text)}
      />
      <Row justify="center">
        <Col style={{}}>
          <ReactPlayer
            style={{ marginLeft: 30 }}
            width={500}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </Col>
      </Row>
    </Card>
  );
}
