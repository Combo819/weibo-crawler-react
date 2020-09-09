import React, { useState } from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import _ from "lodash";
import HtmlParser from "react-html-parser";
import ReactPlayer from "react-player";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { PhotoProvider, PhotoConsumer } from "react-photo-view";
import "react-photo-view/dist/index.css";

type CardProps = {
  weibo: any;
  loading?: boolean;
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
  const { weibo={}, loading } = props;
  const chunkImages: any[][] = _.chunk(weibo&&weibo.pics, 3);

  return (
    <Card
      loading={loading || false}
      actions={[
        <div>
          <CommentOutlined
            style={{ position: "relative", top: -3 }}
            key="comment"
          ></CommentOutlined>
          <span>{weibo&&weibo.commentsCount}</span>
        </div>,
        <div>
          <LikeOutlined
            style={{ position: "relative", top: -3 }}
            key="like"
          ></LikeOutlined>
          <span> {weibo&&weibo.attitudesCount}</span>
        </div>,
      ]}
      style={{ width: "100%" }}
    >
      {" "}
      <Card.Meta
        style={{ marginBottom: 10 }}
        avatar={<Avatar src={weibo&&weibo.user && weibo.user.avatarHd} />}
        title={`@${weibo&&weibo.user && weibo.user.screenName}`}
        description={HtmlParser(weibo&&weibo.text)}
      />
      {weibo&&weibo.pics && (
        <Row justify="center">
          <Col>
            <PhotoProvider>
              {chunkImages.map((item) => (
                <Row gutter={[8, 8]} justify="start">
                  {item.map((ele) => (
                    <Col
                      key={ele.url}
                      style={{ width: 150, overflow: "hidden" }}
                    >
                      <PhotoConsumer
                        key={getImageUrl(ele.url)}
                        intro={getImageUrl(ele.url)}
                        src={getImageUrl(ele.url)}
                      >
                        <img
                          className="img-thumbnail"
                          style={{
                            height: 150,
                            width: 150,
                            objectFit: "cover",
                          }}
                          src={getImageUrl(ele.url)}
                        ></img>
                      </PhotoConsumer>
                    </Col>
                  ))}
                </Row>
              ))}
            </PhotoProvider>
          </Col>
        </Row>
      )}
      {weibo&&weibo.pageInfo && (
        <Row justify="center">
          <Col>
            <ReactPlayer
              type="video/mp4"
              style={{ marginLeft: 30 }}
              width={500}
              url={getVideoUrl(weibo&&weibo.pageInfo.url)}
              controls={true}
            />
          </Col>
        </Row>
      )}
    </Card>
  );
}
