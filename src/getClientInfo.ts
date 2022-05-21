export async function getClientInfo(token: string, serveBase: string) {
  const response = await fetch(`${serveBase}/users/private/get/${token}`);
  const json: { id: string; avatar: string; username: string } =
    await response.json();
  return json;
}
