export function GET() {
  return Response.json(
    { service: "american-property-solutions", status: "ok" },
    { headers: { "Cache-Control": "no-store" } }
  );
}
