import Anthropic from "@anthropic-ai/sdk";

// Which movie to watch?
async function main() {
  const client = new Anthropic({
    apiKey: process.env["ANTHROPIC_API_KEY"], // This is the default and can be omitted
  });

  const message = await client.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: "Hello, Claude" }],
    model: "claude-sonnet-4-5-20250929",
  });
}

await main();
