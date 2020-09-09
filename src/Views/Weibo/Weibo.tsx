import React, { useEffect, useState } from "react";
import { Col, Row, Pagination } from "antd";
import { WeiboCard } from "../../Component/WeiboCard";
import { getWeibosApi } from "../../Api";
import { useLocation } from "react-router-dom";

function Weibo(Props: React.Props<any>) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const [weibos, setWeibos] = useState([]);
  const [page, setPage] = useState(query.get("page"));
  const [pageSize, setPageSize] = useState(query.get("pageSize"));
  useEffect(() => {
    getWeibosApi(parseInt(page || "0"), parseInt(pageSize || "10"))
      .then((res) => {
        const { weibo }: { weibo: any; totalNumber: number } = res.data;
        setWeibos(weibo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          {weibos.map((item: any) => {
            return (
              <Row className={"mt-3"} key={item.id}>
                <Col>
                  <WeiboCard isCommentsPage={false} page={page} pageSize={pageSize} weibo={item}></WeiboCard>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col className="d-flex flex-row-reverse" span={8}>
          <Pagination className="p-2"></Pagination>
        </Col>
      </Row>
    </>
  );
}

export default Weibo;
