let testText = "The internet speed test conducted on [Date/Time] using a [Wired/Wi-Fi] connection revealed a download speed of [XX] Mbps, an upload speed of [XX] Mbps, and a ping (latency) of [XX] ms. Compared to the subscribed internet plan of [ISP Plan Speed, e.g., 100 Mbps download], the download speed is [Below/Above/Consistent with] the expected rate. The upload speed is [sufficient/insufficient] for typical activities like video conferencing and file sharing. The ping time of [XX] ms is considered [excellent/good/high], indicating a [responsive/delayed] connection for real-time applications such as online gaming or video calls. It is important to note that the test was performed over [Wi-Fi/Ethernet], and [mention any other factors, e.g., multiple users, background downloads] were active, which may have slightly impacted the results from the theoretical maximum speed. Overall, the connection speed appears [adequate/inadequate] for the intended use.";
let startTime, endTime;

function startTest() {
// Set the test text
document.getElementById("inputText").value = testText;

// Reset user input and output
let userInput = document.getElementById("userInput");
userInput.value = "";
userInput.readOnly = false;
userInput.focus();

document.getElementById("output").innerHTML = "";

// Start timer
startTime = new Date().getTime();
}

function endTest() {
            endTime = new Date().getTime();

            // Disable user input
            document.getElementById("userInput").readOnly = true;

            // Calculate time elapsed and words per minute (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // in seconds
            var userTypedText = document.getElementById("userInput").value;
            var  totallength =userTypedText.length;

            // Split the text using regex to count words correctly
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var wpm = 0; // Default value

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // Display the results
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
                "<p>Total Length: " + totallength + "</p>"+
                "<p>Words Typed: " + typedWords + "</p>" +
                "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";
            }

