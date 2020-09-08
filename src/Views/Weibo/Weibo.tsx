import React, { useEffect, useState } from "react";
import { Col, Row, Pagination } from "antd";
import { CardProto } from "../../Component/WeiboCard";
import { getWeibosApi } from "../../Api";

function Weibo(Props: React.Props<any>) {
  const [weibos, setWeibos] = useState([]);

  useEffect(() => {
    getWeibosApi(0, 10)
      .then((res) => {
        const {
          weibo,
          totalNumber,
        }: { weibo: any; totalNumber: number } = res.data;
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
                  <CardProto weibo={item}></CardProto>
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
