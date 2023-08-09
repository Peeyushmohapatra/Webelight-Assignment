import React from "react";
import "./Home.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const repo = useSelector((state) => {
    return state.repoArr;
  });
  console.log(repo);
  return (
    <div className="home_container">
      {repo &&
        repo.map((item) => {
          {
            console.log(item.name);
          }
          return (
            <>
            <div className="container">
              <div className="left_container">
                <img src={item.owner.avatar_url} alt="" />
              </div>
              <div className="right_container">
                <div className="details_container">
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <div className="stars_container">
                    <div className="inner_star_container">
                      <Button variant="outline-primary"><i class="fa-solid fa-star"></i>{item.stargazers_count}</Button>
                      <Button variant="outline-primary">{item.open_issues_count}</Button>
                    </div>
                    <div className="time_container">
                      <span>Last Pushed {item.pushed_at} by {item.owner.login}</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown_container">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                  >
                    <Dropdown.Item href="#/action-1">
                      <Link to={`graph/${item.owner.login}/${item.name}`}>
                      Commit
                      </Link>
                      </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Addition
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Deletion
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>

            </div>
              {/* <div className="graph_container"></div> */}
            </>
          );
        })}
    </div>
  );
};

export default Home;
