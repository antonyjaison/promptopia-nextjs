import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    console.log("djnkjsnd")
  const { userId, prompt, tag } = await req.json();
  console.log("hello")

  try {
    await connectToDb();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", {
      status: 500,
    });
  }
};
