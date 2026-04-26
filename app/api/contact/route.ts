export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Form submitted:", body);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}