document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name && email && message){
    document.getElementById("response").textContent = "Thank you, " + name + "! Your feedback has been submitted.";
    document.getElementById("feedbackForm").reset();
  } else {
    document.getElementById("response").textContent = "Please fill in all fields.";
    document.getElementById("response").style.color = "red";
  }
});
