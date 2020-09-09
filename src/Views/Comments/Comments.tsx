import React, { useEffect, useState } from "react";
import { Col, Row, PageHeader } from "antd";
import { WeiboCard } from "../../Component/WeiboCard";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { getSingleWeiboApi } from "../../Api";
function Comments(props: React.Props<any>) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  function usePushState() {
    return useLocation().state || { page: 0, pageSize: 10 };
  }
  const history = useHistory();
  console.log(useLocation(), "useLocation().state");
  const { weiboId } = useParams();
  const query = useQuery();
  const [weibo, setWeibo] = useState({});
  const [totalNumber, setTotalNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const { page: backPage, pageSize: backPageSize } = usePushState() as any;
  useEffect(() => {
    setLoading(true);
    getSingleWeiboApi(
      weiboId,
      parseInt(query.get("page") || "1"),
      parseInt(query.get("pageSize") || "10")
    )
      .then((res) => {
        const { weibo, totalNumber } = res.data;
        setWeibo(weibo);
        setTotalNumber(totalNumber);
        setLoading(false);
      })
      .catch((err) => {});
  }, [weiboId]);
  return (
    <>
      <Row justify="center">
        <Col style={{ width: 600 }}>
          <PageHeader
            className="site-page-header"
            onBack={() => {
              history.push({
                pathname: `/`,
                search: `?page=${backPage}&pageSize=${backPageSize}`,
              });
            }}
            title="Title"
            subTitle="This is a subtitle"
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col style={{ width: 600 }}>
          <WeiboCard
            isCommentsPage={true}
            loading={loading}
            weibo={weibo}
          ></WeiboCard>
        </Col>
      </Row>
      <Row justify="center">
        <Col>comment</Col>
      </Row>
    </>
  );
}

export default Comments;
