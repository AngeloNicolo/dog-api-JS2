async function logJSONData() {

    const response = await fetch("https://dog-api.kinduff.com/api/facts?number=10");

    const jsonData = await response.json();

    console.log(jsonData);

  }

  logJSONData();