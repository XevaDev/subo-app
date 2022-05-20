export async function getClientInfo(token, serveBase) {
    const response = await fetch(`${serveBase}/users/private/get?token=${token}`);
    const json = await response.json();
    return json;
}
//# sourceMappingURL=getClientInfo.js.map