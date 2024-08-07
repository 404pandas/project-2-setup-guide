const newFormHandler = async function (event) {
  event.preventDefault();

  const message = document.querySelector('textarea[name="data-message"]').value;

  // Reminder- We were able to look at out project-2-setup-guide/controllers/api/exampleDataRoutes.js file to determine what our route is for this request
  await fetch(`/api/exampleData`, {
    // Reminder- Method will change depending on what we are doing to our API
    method: "POST",
    // Reminder- We need to make sure we are sending the correct data to our API by stringifying the data we captured from the form on line 4
    body: JSON.stringify({
      message,
    }),
    headers: { "Content-Type": "application/json" },
  });
  // Reminder- This might change depending on your app. Where do you want your user to go after they submit the form?
  document.location.replace("/");
};

document
  .querySelector("#new-data-form")
  .addEventListener("submit", newFormHandler);
