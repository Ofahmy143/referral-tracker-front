
/**
 * @param {String} backendUrl url to send the data to
 * @param {String} iosRedirectUrl url of the app store page for iOS
 * @param {String} androidRedirectUrl url of the app store page for Android
 */
const handleRefferal = async (backendUrl, iosRedirectUrl, androidRedirectUrl) => {
    const params = new URLSearchParams(window.location.search);
        const inviterId = params.get("inviter");
        if (inviterId) {

          async function retrievePublicIp() {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            return data.ip;
          }
          // Collect device info
          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          const publicIP = await retrievePublicIp();

          console.log("Inviter ID:", `${inviterId}`);


          
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
              userAgent:window.navigator.userAgent,
              inviterId: inviterId,
            }),
          });

          //Redirect based on OS
        //   if (os.platform === "iOS") {
        //     window.location.href = iosRedirectUrl;
        //   } else if (os.platform === "Android") {
        //     window.location.href = androidRedirectUrl;
        //   } else {
        //     // Optionally handle other OS types or show an error
        //     console.error("Unsupported OS");
        //   }
        }
}