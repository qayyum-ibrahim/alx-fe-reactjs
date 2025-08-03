import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async ({ username, location, minRepos }) => {
  const searchParams = [];

  if (username) searchParams.push(username);
  if (location) searchParams.push(`location:${location}`);
  if (minRepos) searchParams.push(`repos:>${minRepos}`);

  const query = searchParams.join("+");

  try {
    const res = await axios.get(`${BASE_URL}${query}`);
    return res.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
