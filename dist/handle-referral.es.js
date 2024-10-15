const p = async (t, o, i) => {
  const e = new URLSearchParams(window.location.search).get("inviter");
  if (e) {
    async function r() {
      return (await (await fetch("https://api.ipify.org?format=json")).json()).ip;
    }
    const s = window.screen.width, a = window.screen.height, c = await r();
    console.log("Inviter ID:", e), await fetch(`${t}/store-referral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        publicIP: c,
        screenHeight: a,
        screenWidth: s,
        userAgent: window.navigator.userAgent,
        inviterId: e
      })
    });
    const n = window.navigator.userAgent;
    /iPhone|iPad|iPod/i.test(n) ? window.location.href = o : /Android/i.test(n) ? window.location.href = i : console.error("Unsupported OS");
  }
};
export {
  p as handleRefferal
};
