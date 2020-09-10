import React, { useEffect, useState } from "react";
import { Col, Row, Pagination } from "antd";
import { WeiboCard } from "../../Component/WeiboCard";
import { getWeibosApi } from "../../Api";
import { useLocation,useHistory } from "react-router-dom";

function Weibo(Props: React.Props<any>) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const history = useHistory();
  const query = useQuery();
  const [weibos, setWeibos] = useState([]);
  const [page, setPage] = useState(query.get("page"));
  const [pageSize, setPageSize] = useState(query.get("pageSize"));
  const [totalNumber,setTotalNumber] = useState(0);
  useEffect(() => {
    getWeibosApi(parseInt(page || "1"), parseInt(pageSize || "10"))
      .then((res) => {
        const { weibo,totalNumber }: { weibo: any; totalNumber: number } = res.data;
        setWeibos(weibo);
        setTotalNumber(totalNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page,pageSize]);

  const onShowSizeChange = (currentPage: number, pageSize: number) => {
    setPage(String(currentPage));
    setPageSize(String(pageSize));
    history.push({pathname:'/',search:`?page=${page}&pageSize=${pageSize}`})
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Col style={{width:600}} span={8}>
          {weibos.map((item: any) => {
            return (
              <Row className={"mt-3"} key={item.id}>
                <Col>
                  <WeiboCard
                    isCommentsPage={false}
                    page={page}
                    pageSize={pageSize}
                    weibo={item}
                  ></WeiboCard>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col className="d-flex flex-row-reverse" span={8}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={parseInt(page||'1')}
            total={totalNumber}
            className="p-2"
          ></Pagination>
        </Col>
      </Row>
    </>
  );
}

export default Weibo;
