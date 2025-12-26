const profile = {
  name: "Jane Doe",
  course: "Web Development",
  year: 2025,
};

export async function GET() {
  return Response.json(profile);
}
