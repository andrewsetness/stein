/**
 * Cloudflare Pages Function — optional hosted webhook if stein-site is on Cloudflare Pages.
 * URL: https://<your-pages-domain>/api/plaid-webhook
 */
export async function onRequestPost(context) {
  const body = await context.request.text();
  console.log("Plaid webhook", { bytes: body.length, preview: body.slice(0, 240) });
  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestGet() {
  return new Response(JSON.stringify({ service: "stein-plaid-webhook", status: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
