export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "ceae01a497814f499f7aebd4830653cb"; // Replace with your actual Client ID from Spotify
export const redirectUri = "http://localhost:3000"; // Make sure this matches your registered redirect URI
export const scopes = [
    // View Account Data
    "user-read-private",          // Access private account info (name, country)
    "user-read-email",            // View email address
    
    // View Activity on Spotify
    "user-read-recently-played",  // View recently played tracks
    "user-read-playback-state",   // Access current playback status
    "user-read-currently-playing",// View currently playing content
    "user-top-read",              // View top artists and content
    "user-library-read",          // View items in user's library
    "user-follow-read",           // View who the user follows
    "playlist-read-private",      // Access private playlists
    "playlist-read-collaborative",// Access collaborative playlists
    
    // Take Actions in Spotify
    "user-modify-playback-state", // Control playback on Spotify devices
    "user-library-modify",        // Add/remove items in the user's library
    "playlist-modify-private",    // Create/edit private playlists
    "playlist-modify-public",     // Create/edit public playlists
    "user-follow-modify"          // Manage who the user follows
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};