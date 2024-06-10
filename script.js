document.getElementById('divineButton').addEventListener('click', function() {
    const list1 = document.getElementById('list1').value.split(',').map(word => word.trim()).filter(word => word);
    const list2 = document.getElementById('list2').value.split(',').map(word => word.trim()).filter(word => word);
    
    // Shuffle list2
    for (let i = list2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list2[i], list2[j]] = [list2[j], list2[i]];
    }
    
    // Determine the number of pairs
    const minLength = Math.min(list1.length, list2.length);
    let resultsHTML = '<h2 class="text-xl font-bold mb-2">Results:</h2>';
    
    // Match words and display results
    for (let i = 0; i < minLength; i++) {
        resultsHTML += `<p>${list1[i]} - ${list2[i]}</p>`;
    }
    
    // Display unmatched words
    if (list1.length > minLength) {
        resultsHTML += '<h3 class="text-lg font-bold mt-2">Unmatched from List 1:</h3>';
        for (let i = minLength; i < list1.length; i++) {
            resultsHTML += `<p>${list1[i]}</p>`;
        }
    }
    
    if (list2.length > minLength) {
        resultsHTML += '<h3 class="text-lg font-bold mt-2">Unmatched from List 2:</h3>';
        for (let i = minLength; i < list2.length; i++) {
            resultsHTML += `<p>${list2[i]}</p>`;
        }
    }
    
    document.getElementById('results').innerHTML = resultsHTML;
});
