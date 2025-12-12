import { useState, useEffect } from "react";
import React from "react";
import Search from "./Search";
import User from "./User";
import { Body } from "./styles/App.Styled";
function App() {
  // get login from search bar
  const [value, setValue] = useState("octocat");
  const [theme, setTheme] = useState(false);

  // loading state
  const [loading, setLoading] = useState(false);

  // get users information
  const [message, setMessage] = useState();
  const [photo, setPhoto] = useState();
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [join, setJoin] = useState("");
  const [bio, setBio] = useState();
  const [repos, setRepos] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [location, setLocation] = useState();
  const [twitter, setTwitter] = useState();
  const [blog, setBlog] = useState();
  const [company, setCompany] = useState();

  // fetch user data from GitHub API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const api = "https://api.github.com/users/" + value;
      try {
        const response = await fetch(api);
        const data = await response.json();
        setMessage(data.message);
        setPhoto(data.avatar_url);
        setName(data.name);
        setLogin(data.login);
        setJoin(data.created_at);
        setBio(data.bio);
        setRepos(data.public_repos);
        setFollowers(data.followers);
        setFollowing(data.following);
        setLocation(data.location);
        setTwitter(data.twitter_username);
        setBlog(data.blog);
        setCompany(data.company);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setMessage("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [value]);

  return (
    <Body theme={theme}>
      <div className="section">
        <Search
          setValue={setValue}
          placeholder={"Search GitHub username…"}
          value={value}
          theme={theme}
          setTheme={setTheme}
        />
        {loading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : message === "Not Found" ? (
          <div className="val">
            <p>No results</p>
          </div>
        ) : (
          <User
            theme={theme}
            value={value}
            photo={photo}
            name={name}
            join={join}
            login={login}
            bio={bio}
            repos={repos}
            followers={followers}
            following={following}
            location={location}
            twitter={twitter}
            blog={blog}
            company={company}
          />
        )}
      </div>
    </Body>
  );
}

export default App;
