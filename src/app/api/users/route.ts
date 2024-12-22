import { userData } from "./data";

export const GET = async () => {
  const result = userData;

  return Response.json(result);
};
