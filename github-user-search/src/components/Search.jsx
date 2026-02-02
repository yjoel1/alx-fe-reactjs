import { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setPage(1);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setUsers(data.items);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    const data = await fetchAdvancedUsers(
      username,
      location,
      minRepos,
      nextPage
    );

    setUsers([...users, ...data.items]);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          className="border p-2 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 border p-4 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && !loading && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
