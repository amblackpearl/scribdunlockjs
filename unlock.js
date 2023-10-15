function extractDocumentID() {
    const linkInput = document.getElementById('scribd_url');
    const unlockedURL = document.getElementById('unlocked_url');

    // Regular expression to extract the number following "/doc" or "/document/"
    const scribdRegex = /\/(doc|document)\/(\d+)/;
    const link = linkInput.value;
    const match = link.match(scribdRegex);

    if (match && match[2]) {
        const documentId = match[2];

        // Construct the unlocked URL with the extracted documentId
        const unlockedURLValue = `https://www.scribd.com/embeds/${documentId}/content?start_page=1&view_mode=scroll&access_key=key-fFexxf7r1bzEfWu3HKwf`;

        unlockedURL.textContent = unlockedURLValue;
    } else {
        unlockedURL.textContent = "Document ID not found in the link.";
    }
}
