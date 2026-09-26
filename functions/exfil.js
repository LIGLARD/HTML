// exfil.js

async function fetchData() {
  try {
    const response = await fetch('/.netlify/functions/proxy-Zelos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: 'https://Zelos.netlify.app/wallets' // 👈 THIS IS WHAT YOU PUT HERE
      })
    });

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call it
fetchData();
