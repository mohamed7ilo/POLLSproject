const pollForm = document.getElementById("poll-form");
const pollResults = document.getElementById("poll-results");

pollForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = document.getElementById("question").value;
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("option4").value;
  const answer = parseInt(document.getElementById("answer").value);

  if (!question ||!option1 ||!option2 ||!option3 ||!option4 ||!answer) {
    alert("Please fill in all fields.");
    return;
  }

  const pollResultsHTML = `
  <h2>${question}</h2>
  <ul>
    <li>${option1}</li>
    <li>${option2}</li>
    <li>${option3}</li>
    <li>${option4}</li>
  </ul>
  <p>The correct answer is ${answer}.</p>
`;


  pollResults.innerHTML = pollResultsHTML;
});