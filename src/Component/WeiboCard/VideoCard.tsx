import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
import CardProto from "./WeiboCard";
type VideoCardProps = {
  weibo: any;
};
export default function VideoCard(props: VideoCardProps) {
  const { weibo } = props;

  return (
    <CardProto weibo={weibo}>
      <ReactPlayer
        style={{ marginLeft: 30 }}
        width={500}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </CardProto>
  );
}

