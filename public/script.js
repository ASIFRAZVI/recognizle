// public/script.js
document.addEventListener("DOMContentLoaded", () => {
    // Fetch user data from your Express API
    fetch("/addtask")
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById("taskList");

            // Loop through the users and create list items to display them
            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <strong>Name:</strong> ${user.name}<br>
                    <strong>Email:</strong> ${user.email}<br>
                    <strong>Description:</strong> ${user.description}<br>
                    <strong>Status:</strong> ${user.Status}<br> <br> <br>
                `;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error(error);
        });
});
