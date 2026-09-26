// functions/proxy-Zelos.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { url } = JSON.parse(event.body); // 👈 GET the URL from POST body

  try {
    const response = await fetch(url, {
      method: 'GET', // or whatever method you need
      headers: {
        'Authorization': process.env.AUTH_TOKEN || '', // optional if needed
      },
    });

    const data = await response.text();

    return {
      statusCode: 200,
      body: data,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins (or your domain)
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to proxy request' }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};

