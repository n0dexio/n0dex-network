export async function runInference(
  prompt: string
) {
  return {
    success: true,
    output: `Response generated for ${prompt}`
  };
}
