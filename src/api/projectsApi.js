import axios from "axios";

/**
 * Fetches projects data from the server.
 * @returns {Promise} A promise that resolves with the projects data.
 */
export const fetchProjects = async () => {
  const { data } = await axios.get("/api/projects");
  return data;
};
