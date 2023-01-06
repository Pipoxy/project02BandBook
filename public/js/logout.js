const logout = async function () {
  console.log("hello");
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Can't log out");
    console.log(response.status);
  }
};

document.querySelector("#logout-button").addEventListener("click", logout);
