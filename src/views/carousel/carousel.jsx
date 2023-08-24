import axios from "axios";
import React, { useEffect } from "react";

export default function carousel() {
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("/api/playlist/string");
      console.log(res);
    }
    fetchData();
  }, []);

  return <div>carousel</div>;
}
