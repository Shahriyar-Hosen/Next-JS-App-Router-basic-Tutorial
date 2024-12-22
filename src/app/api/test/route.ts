import { userData } from "./data";

export const GET = async () => {
  const result = userData;
  return Response.json(result);
};

export const POST = async () => {
  const newData = { id: 4, name: "John Doe Jr.", age: 5 };

  userData.push(newData);

  return Response.json(newData, { status: 201 });
};
