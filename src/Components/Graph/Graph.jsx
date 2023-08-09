import React, { useEffect, useState } from "react";
import "./Graph.css";
import { Link, useParams } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, XAxis } from "recharts";
import { graph, contribution1 } from "../../Functions/functions";

const Graph = () => {
  const { login, repo } = useParams();
  // console.log(fullname);
  const [commit, setCommit] = useState([]);
  const [contribution, setContribution] = useState([]);
  // console.log(commit);
  useEffect(() => {
    graph(login, repo, setCommit);
    contribution1(login, repo, setContribution);
  }, []);
  return (
    <div>
      {/* {fullname} */}
      {commit && (
        <ResponsiveContainer width="80%" aspect={3}>
          <LineChart data={commit}>
            <XAxis dataKey="week" />
            <Line dataKey="total" />
          </LineChart>
        </ResponsiveContainer>
      )}

      {contribution &&  (
        
        <ResponsiveContainer width="80%" aspect={3}>
          <LineChart data={contribution}>
            <XAxis dataKey="" />
            <Line dataKey="total" />

          </LineChart>
        </ResponsiveContainer>
      )}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Graph;
