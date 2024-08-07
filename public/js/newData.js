const newFormHandler = async function (event) {
  event.preventDefault();

  const message = document.querySelector('textarea[name="data-message"]').value;

  await fetch(`/api/exampleData`, {
    method: "POST",
    body: JSON.stringify({
      message,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/");
};

document
  .querySelector("#new-data-form")
  .addEventListener("submit", newFormHandler);
