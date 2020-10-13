/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Submit input if user releases "Enter" key
document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        privatePlatformReconstruction();
    }
});

// Driver function
function privatePlatformReconstruction() {
    var outputElement = document.getElementById("output");
    var input = document.getElementById("input").value.toLowerCase();

    outputElement.innerText = "";

    // If input isNotEmpty
    if (isNotEmpty(input)) {
        var instagram = "instagram.com/";
        var twitter = "twitter.com/";
        var youtube = "youtube.com/";

        // Instagram -> Bibliogram
        // If input includes Instagram URL + "p/", input is treated as Instagram profile...
        if (input.includes(instagram + "p/")) {
            setAnchor(outputElement, "https://bibliogram.art/" + input.split(instagram)[1]);
            // ...Else if input includes Instagram URL, input is treated as Instagram post
        } else if (input.includes(instagram)) { // 
            setAnchor(outputElement, "https://bibliogram.art/u/" + input.split(instagram)[1]);

            // Twitter -> nitter
            // Else if input includes Twitter URL, input is treated as Twitter profile or tweet
        } else if (input.includes(twitter)) {
            setAnchor(outputElement, "https://nitter.net/" + input.split(twitter)[1]);

            // YouTube -> Invidious
            // Else if input includes YouTube URL, input is treated as YouTube channel or video
        } else if (input.includes(youtube)) {
            setAnchor(outputElement, "https://invidiou.site/" + input.split(youtube)[1]);

            // Else input is empty, reset
        } else {
            reset();
        }
    }
}

// Return True if passed-in str is not empty, null, nor contains spaces, tabs, etc.
function isNotEmpty(str) {
    return !(str == "" || str === null || /\s/.test(str));
}

// Set innerText and href attributes of passed-in element to passed-in link
function setAnchor(element, link) {
    element.innerText = link;
    element.href = link;
}

// Set value of input element and innerText of output element to empty String
function reset() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerText = "";
}