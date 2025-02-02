export function capitalizeEachWord(text) {
    if (!text) return ""; // Handle empty or undefined input
    return text
        .split(" ") // Split the text into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
        .join(" "); // Join the words back into a single string
}
