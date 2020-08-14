const getLatestYoutube = async () => {
  const response = await $.ajax({
    method: 'GET',
    url: '/api/youtube',
  });
  console.log(response);
  if (response.items !== undefined) {
    const latestYouTube$ = $('<iframe>');
    latestYouTube$.attr(
      'src',
      'https://www.youtube.com/embed/' + response.items[0].id.videoId
    );
    latestYouTube$.attr('height', '300px');
    latestYouTube$.attr('width', '500px');
    latestYouTube$.attr('allowfullscreen', true);
    latestYouTube$.attr('style', 'border: none;');
    latestYouTube$.attr('class', 'youtube-box');
    $('#youtube-box').append(latestYouTube$);
    $('#youtube-box').attr('style', 'visibility: show;');
  } else {
    const latestYouTube$ = $('<iframe>');
    latestYouTube$.attr('src', 'https://www.youtube.com/embed/0rSERxF2SXg');
    latestYouTube$.attr('height', '300px');
    latestYouTube$.attr('width', '500px');
    latestYouTube$.attr('allowfullscreen', true);
    latestYouTube$.attr('style', 'border: none;');
    latestYouTube$.attr('class', 'youtube-box');
    $('#youtube-box').append(latestYouTube$);
    $('#youtube-box').attr('style', 'visibility: show;');
  }
};

getLatestYoutube();
