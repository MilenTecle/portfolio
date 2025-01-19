import React, { useState } from 'react';
import axios from 'axios';

const GitHubInfo = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [repoData, setRepoData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchGitHubInformation = async () => {
        if (!username) {
            setError('Please enter a GitHub username');
            setUserData(null);
            setRepoData([]);
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const userResponse = await axios.get(`https://api.github.com/users/${username}`);
            const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
            setUserData(userResponse.data);
            setRepoData(reposResponse.data);
        } catch (err) {
            if (err.response.status === 404) {
                setError(`No info found for user ${username}`);
            } else if (err.response.status === 403) {
                const resetTime = new Date(err.response.headers['x-ratelimit-reset'] * 1000);
                setError(`Too many requests, please wait until ${resetTime.toLocaleTimeString()}`);
            } else {
                setError('An error occurred while fetching data');
            }
            setUserData(null);
            setRepoData([]);
        } finally {
            setLoading(false);
        }
    };

    // Rendera användarens information
    const renderUserInformation = () => {
        if (!userData) return null;

        return (
            <div className="gh-content">
                <h2>
                    {userData.name || userData.login}
                    <span className="small-name">
                        (@<a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.login}</a>)
                    </span>
                </h2>
                <div className="gh-avatar">
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        <img src={userData.avatar_url} width="80" height="80" alt={userData.login} />
                    </a>
                </div>
                <p>Followers: {userData.followers} - Following: {userData.following}</p>
                <p>Repos: {userData.public_repos}</p>
            </div>
        );
    };

    const renderRepoInformation = () => {
        if (repoData.length === 0) {
            return <div className="clearfix repo-list">No repos!</div>;
        }

        return (
            <div className="clearfix repo-list">
                <p><strong>Repo List:</strong></p>
                <ul>
                    {repoData.map((repo) => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="github-info">
            <h3>Search GitHub Profiles</h3>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={fetchGitHubInformation}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {renderUserInformation()}
            {renderRepoInformation()}
        </div>
    );
};

export default GitHubInfo;