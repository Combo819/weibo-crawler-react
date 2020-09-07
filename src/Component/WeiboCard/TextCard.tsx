import React from "react";
import { Card, Avatar } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import CardProto from './WeiboCard';

type TextCardProps = {
  weibo: any;
};
export default function TextCard(props: TextCardProps) {
  const { weibo } = props;
  return (
    <CardProto weibo={weibo}>
        {null}
    </CardProto>
  );
}
