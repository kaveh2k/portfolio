import axios from "axios";

/**
 * Fetches the list of skills from the API.
 *
 * @returns {Promise<Object>} A promise that resolves to the data containing the list of skills.
 */
export const fetchSkills = async () => {
  const { data } = await axios.get("/api/skills");
  return data;
};
