export const handleRefferal = async (
  inviterId: string,
  backendUrl: string,
  iosRedirectUrl: string,
  androidRedirectUrl: string
): Promise<void> => {
  if (inviterId) {

    // Collect device info
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Send data to the backend
    await fetch(`${backendUrl}/store-referral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
