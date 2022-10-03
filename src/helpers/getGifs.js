export const getGifs = async (category)=>{
    
    //properties
    const key = 'QHcbLjdnZzDeR3WIbjpDw4sN2CkbUWA6';
    const search = category;
    const limit = 10;

    //fetch
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}&limit=${limit}&offset=0&rating=r&lang=en`
    const resp = await fetch(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Set-Cookie': 'cross-site-cookie=whatever; SameSite=None; Secure'
              },
        })
    const {data} = await resp.json();
    
    //get images
    const gifs = data.map(
        img => (
            {id: img.id,
            title: img.title,
            url: img.images.original.url}
        )
    )
    
    return gifs
} 