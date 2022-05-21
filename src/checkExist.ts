let serverBase = "http://localhost:2000";

export async function checkExist() {
  let w = window.localStorage.getItem("token");

  if (w === null) {
    console.error("Tried to connect but no token found.");
  } else {
    try {
      const response = await fetch(`${serverBase}/users/private/exists/${w}`);
      const json = await response.json();
      return json.exists ? true : false;
    } catch (e) {
      delete window.localStorage.token;
      console.error("Failed to load account.");
    }
  }
}
