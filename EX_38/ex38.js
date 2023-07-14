// Declaring a function
function Make_Album(artist_name, album_title, track_no) {
    if (track_no === void 0) { track_no = 0; }
    var album = {
        title: album_title,
        artist: artist_name
    };
    // if track no. defined
    if (track_no != 0) {
        album.trackno = track_no;
    }
    return album;
}
console.log(Make_Album("Jones", "My Life"));
// including track no.
console.log(Make_Album("Jones", "My Life", 2));
