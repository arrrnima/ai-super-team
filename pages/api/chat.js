export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY is not set in .env.local");
    return res.status(500).json({ error: { message: "ANTHROPIC_API_KEY is not set. Check your .env.local file." } });
  }

  const payload = {
    model: "claude-sonnet-4-5",
    max_tokens: req.body.max_tokens || 1000,
    system: req.body.system,
    messages: req.body.messages,
  };

  console.log("Sending to Anthropic | model:", payload.model, "| messages:", payload.messages?.length);

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Anthropic error:", response.status, JSON.stringify(data));
    } else {
      console.log("Success | tokens used:", data.usage);
    }

    return res.status(response.status).json(data);
  } catch (err) {
    console.error("Fetch error:", err.message);
    return res.status(500).json({ error: { message: `Failed to reach Anthropic: ${err.message}` } });
  }
}
