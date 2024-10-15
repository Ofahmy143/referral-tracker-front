export const handleRefferal = async (
  backendUrl: string,
  iosRedirectUrl: string,
  androidRedirectUrl: string
): Promise<void> => {
  const params = new URLSearchParams(window.location.search);
  const inviterId = params.get("inviter");

  if (inviterId) {
    async function retrievePublicIp(): Promise<string> {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    }

    // Collect device info
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const publicIP = await retrievePublicIp();

    console.log("Inviter ID:", inviterId);

    // Send data to the backend
    await fetch(`${backendUrl}/store-referral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publicIP,
        screenHeight,
        screenWidth,
        userAgent: window.navigator.userAgent,
        inviterId,
      }),
    });

    // OS-based redirection (You can refine OS detection logic)
    const userAgent = window.navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href = iosRedirectUrl;
    } else if (/Android/i.test(userAgent)) {
      window.location.href = androidRedirectUrl;
    } else {
      console.error("Unsupported OS");
    }
  }
};
