export default {
    async fetch(request) {
      const GOOGLE_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAjiN6AKNgdTqyb26Wvb4RPO31mX5pO-7M";
  
      const modifiedRequest = new Request(GOOGLE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await request.text(),
      });
  
      const response = await fetch(modifiedRequest);
      return new Response(response.body, response);
    }
  };
// ff