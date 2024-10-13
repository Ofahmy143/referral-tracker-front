/**
 * @param {String} backendUrl url to send the data to
 * @param {String} iosRedirectUrl url of the app store page for iOS
 * @param {String} androidRedirectUrl url of the app store page for Android
 * @param {String} inviterId id of the inviter ( should be passed as a query parameter)
 */
const handleRefferal = async (
  backendUrl,
  inviterId,
  iosRedirectUrl,
  androidRedirectUrl
) => {
  if (inviterId) {
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
        inviterId: inviterId,
      }),
    });

    //Redirect based on OS
    if (os.platform === "iOS") {
      window.location.href = iosRedirectUrl;
    } else if (os.platform === "Android") {
      window.location.href = androidRedirectUrl;
    } else {
      alert("Unsupported OS");
    }
  }
};
