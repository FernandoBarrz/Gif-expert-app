export const getGifs = async (categoryName) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=qT369QZF43gxXmbB4LTUtLgCdTNBSY39&q='${categoryName}'&limit=20`;
    const res = await fetch(URL);
    const {data} = await res.json();
    
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    return gifs
  }

