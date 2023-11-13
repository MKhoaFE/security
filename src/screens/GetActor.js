import React, { useState } from "react";
import { Button, Card, Space, Table, Tag } from "antd";
import axios from "axios";

const columns = [
  {
    title: "ID",
    dataIndex: "actor_id",
    key: "actor_id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
];

function GetActor() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoadData = () => {
    setLoading(true);
    axios.get("http://localhost:3000/api/v1/actors")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button danger style={{ width: "100%", height: "4rem" }} onClick={handleLoadData}>
        GET Actor
      </Button>
      <Card title="Actor list from SAKILA" style={{ width: "100%" }}>
        <Table columns={columns} dataSource={data} loading={loading} />
      </Card>
    </>
  );
}

export default GetActor;