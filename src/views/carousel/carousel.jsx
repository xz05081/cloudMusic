import React, { useEffect } from "react";
import request from "../../utils/request";

export default function carousel() {
  useEffect(() => {
    async function fetchData() {
      let res = await request({
        method: "get",
        url: "/carousel/string",
      });
      console.log(res);
    }
    fetchData();
  }, []);

  return <div>carousel</div>;
}
