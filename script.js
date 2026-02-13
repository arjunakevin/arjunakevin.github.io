const messages = [
    "Beneran?",
    "BENERAN??",
    "LIZA BENERAN :(?",
    "liza plissss...",
    "liza pikirkan lagi baik-baik",
    "kalo km tetep bilang engga aku sedih",
    "bakal sedih banget",
    "BAKAL SEDIH BANGET BANGET....",
    "yaudah deh aku ga akan nanya lagi",
    "tp boong plis bilang mau 💔"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}