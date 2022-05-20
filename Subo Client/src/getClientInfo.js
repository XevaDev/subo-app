export async function getClientInfo(token, serveBase) {
    const response = await fetch(`${serveBase}/getUserData?token=${token}`);
    const json = await response.json();
    return json;
}
//# sourceMappingURL=getClientInfo.js.map