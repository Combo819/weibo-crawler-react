import React, { useEffect, useState } from "react";
import { Col, Row, List, Avatar, Pagination } from "antd";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { getCommentsApi } from "../../Api";
import HtmlParser from "react-html-parser";
import { LikeOutlined } from "@ant-design/icons";
export default function CommentList(props: React.Props<any>) {
  function useQuery() {
    const query = new URLSearchParams(useLocation().search);
    return {page:query.get('page'),pageSize:query.get('pageSize')};
  }
  

  const history = useHistory();
  console.log(useLocation(), "useLocation().state");
  const { weiboId } = useParams();
  const {page:urlPage,pageSize:urlPageSize} = useQuery();
  const [comments, setComments] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(urlPage);
  const [pageSize, setPageSize] = useState(urlPageSize);

  useEffect(() => {
    setLoading(true);
    getCommentsApi(
      weiboId,
      parseInt(page|| "1"),
      parseInt(pageSize || "10")
    )
      .then((res) => {
        const { comments, totalNumber } = res.data;
        setComments(comments);
        setTotalNumber(totalNumber);
        setLoading(false);
      })
      .catch((err) => {});
  }, [weiboId, page, pageSize]);
  const onShowSizeChange = (currentPage: number, pageSize: number) => {
    
    setPage(String(currentPage));
    setPageSize(String(pageSize));
    history.push({
      pathname: `/comments/${weiboId}`,
      search: `?page=${page}&pageSize=${pageSize}`,
    });
  };

  const changePage = (currentPage: number, pageSize: number | undefined) => {
    setPage(String(currentPage));
    setPageSize(String(pageSize));
    history.push({
      pathname: `/comments/${weiboId}`,
      search: `?page=${currentPage}&pageSize=${pageSize}`,
    });
  };
  return (
    <>
      <Row justify="center">
        <Col style={{ width: 600 }}>
          <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={(item: any) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.user && item.user.avatarHd} />}
                  title={
                    <a target="_blank" href={item.user.profileUrl}>{`@${
                      item.user && item.user.screenName
                    }`}</a>
                  }
                  description={HtmlParser(item.text)}
                />
                <span> {item && item.likeCount}</span>
                <LikeOutlined key="like"></LikeOutlined>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col className="d-flex flex-row-reverse" span={8}>
          <Pagination
            onChange={changePage}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={parseInt(page || "1")}
            total={totalNumber}
            className="p-2"
          ></Pagination>
        </Col>
      </Row>
    </>
  );
}
