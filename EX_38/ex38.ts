// Declaring a function

function Make_Album(artist_name:string , album_title:string, track_no=0)
{
    const album:
    {
        title:string,
        artist:string,
        trackno?:number
    } =
    {
        title:album_title,
        artist:artist_name
    };

    // if track no. defined
    if (track_no != 0)
    {
        album.trackno = track_no;

    }

    return album;
}

console.log(Make_Album("Jones", "My Life"));
// including track no.
console.log(Make_Album("Jones", "My Life", 2));
