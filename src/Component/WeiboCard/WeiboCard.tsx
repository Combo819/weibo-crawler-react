import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import _ from "lodash";
import HtmlParser from "react-html-parser";
type CardProps = {
  weibo:any,
  children:React.ReactNode
}

export default function WeiboCard(props:CardProps) {
  const {weibo,children} =  props;
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
            {children}
        </Col>
      </Row>
    </Card>
  );
}
