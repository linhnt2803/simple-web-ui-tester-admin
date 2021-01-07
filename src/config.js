const BASE_API_URL =
  process.env.NODE_ENV === "production" ? "" : `http://localhost:8765`;

export { BASE_API_URL };
