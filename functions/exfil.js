// functions/exfil.js
exports.handler = async (event, context) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>Axiom Exfil</title></head>
      <body>Exfiltrated!</body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // CORS
      "Content-Type": "text/html"          // Required for HTML
    },
    body: html
  };
};
