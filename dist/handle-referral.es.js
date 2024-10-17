const a = async (e, o, t, i) => {
  if (e) {
    const r = window.screen.width, s = window.screen.height;
    await fetch(`${o}/store-referral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        screenHeight: s,
        screenWidth: r,
        userAgent: window.navigator.userAgent,
        inviterId: e
      })
    });
    const n = window.navigator.userAgent;
    /iPhone|iPad|iPod/i.test(n) ? window.location.href = t : /Android/i.test(n) ? window.location.href = i : console.error("Unsupported OS");
  }
};
export {
  a as handleRefferal
};
