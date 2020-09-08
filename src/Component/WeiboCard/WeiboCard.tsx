import React,{useState} from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import _ from "lodash";
import HtmlParser from "react-html-parser";
import ReactPlayer from "react-player";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
type CardProps = {
  weibo: any;
  children: React.ReactNode;
};

const getVideoUrl = (url: string): string => {
  const urlNoQuery = url.split("?")[0];
  const fileName = urlNoQuery.split("/").pop();
  return `http://localhost/videos/${fileName}`;
};

const getImageUrl = (url: string): string => {
  const urlNoQuery = url.split("?")[0];
  const fileName = urlNoQuery.split("/").pop();
  return `http://localhost/images/${fileName}`;
};

export default function WeiboCard(props: CardProps) {
  const { weibo } = props;
  const chunkImages: any[][] = _.chunk(weibo.pics, 3);

  return (
    <Card
      actions={[
        <div>
          <CommentOutlined
            style={{ position: "relative", top: -3 }}
            key="comment"
          ></CommentOutlined>
          <span>{weibo.commentsCount}</span>
        </div>,
        <div>
          <LikeOutlined
            style={{ position: "relative", top: -3 }}
            key="like"
          ></LikeOutlined>
          <span> {weibo.attitudesCount}</span>
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
                  <Col key={ele.url} style={{ width: 150, overflow: "hidden" }}>
                    <Zoom>
                      <img
                        className="img-thumbnail"
                        style={{ height: 150, width: 150, objectFit: "cover" }}
                        src={getImageUrl(ele.url)}
                      ></img>
                    </Zoom>
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
