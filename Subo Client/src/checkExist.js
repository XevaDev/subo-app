let serverBase = "http://localhost:2000";
export let checkExist = () => {
    let res = false;
    let w = window.localStorage.getItem("token");
    if (w === null) {
        console.error("Tried to connect but no token found.");
        return;
    }
    fetch(`${serverBase}/checkExist?token=${w}`)
        .then(async (resx) => {
        if (await resx.json()) {
            if ((await resx.json()).exists === true) {
                res = true;
            }
        }
    })
        .catch(() => {
        console.error("Failed to load account.");
    });
    return res;
};
//# sourceMappingURL=checkExist.js.map