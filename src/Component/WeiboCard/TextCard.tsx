import React from "react";
import { Card, Avatar } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import HtmlParser from "react-html-parser";
type TextCardProps = {
  weibo: any;
};
export default function TextCard(props: TextCardProps) {
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
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={"@24combo"}
        description={HtmlParser(weibo.text)}
      />
    </Card>
  );
}
