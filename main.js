(function(){

  var t = {
    playlist: [
      {
        file: "tracks/01.mp3",
        thumb: "thumb/01.jpg",
        trackName: "Venom",
        trackArtist: "Eminem",
        trackAlbum: "Single",
      },
      {
        file: "tracks/02.mp3",
        thumb: "thumb/02.jpg",
        trackName: "gerye nakon",
        trackArtist: "Ebi",
        trackAlbum: "Single",
      },
      {
        file: "tracks/03.mp3",
        thumb: "thumb/03.jpg",
        trackName: "Franccesca",
        trackArtist: "Hozier",
        trackAlbum: "Single",
      }
      
    ]
  }

  $(".jAudio").jAudio(t);

})();