import { createSdkMcpServer, query, tool } from "@anthropic-ai/claude-agent-sdk";
import z from "zod";

const prompt = `You are a helpful assistant providing guidance on which movie to watch.`;

const mcp = createSdkMcpServer({
  name: "tools",
  version: "0.0.1",
  tools: [
    tool(
      // name
      "string",
      // description
      "foo",
      // Params schema
      {
        url: z.string(),
      },
      // Handler
      async () => {},
    ),
  ],
});

// Which film to watch?
async function main() {
  for await (const message of query({ prompt, options: { mcpServers: { tools: mcp } } })) {
    prettyPrint(message);
  }
}

function prettyPrint(o: unknown): void {
  console.dir(o, { depth: null });
}

await main();
