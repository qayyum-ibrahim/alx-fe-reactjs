import { useState } from "react";
import { fetchUsersByQuery } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchUsersByQuery({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Advanced GitHub User Search
      </h2>

      <form onSubmit={handleSearch} className="grid gap-4">
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      <div className="mt-6 grid gap-4">
        {users.map((user) => (
          <div
            key={user.login}
            className="p-4 border rounded flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold">{user.login}</h4>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
