export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("Form submitted:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "fail" }), {
      status: 500,
    });
  }
}