const GRAPHQL_URL = "http://localhost:9000/";

function fetchGreeting() {
  let getDetails = new Promise((resolve, reject) => {
    fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
              greeting
          }`,
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        resolve(data);
      });
  });

  getDetails.then(({ data }) => {
    document.querySelector("h1").textContent = data.greeting;
    console.log(data.greeting);
  });
}

fetchGreeting();
