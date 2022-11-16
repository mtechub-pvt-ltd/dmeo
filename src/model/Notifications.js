const logos = [
    { image: require("./images/Netflix.png") },
    { image: require("./images/disney.jpg") },
    { image: require("./images/spotify.png") },
    { image: require("./images/youtube.png") },
    { image: require("./images/hbo.jpg") },
    { image: require("./images/disney.jpg") },
  ];

export const Notifications = [
    {
        id: 1,
        logo:logos[0].image,
        title: 'Netflix',
        details: 'Start watching unlimited movies, TV shows, and more.',
        type:'Netflix'
    },
    {
        id: 2,
        logo:logos[1].image,
        title: 'Disney +',
        details: 'The streaming home of your favorite stories',
        type:'Disney'
    },
    {
        id: 3,
        logo:logos[2].image,
        title: 'Spotify',
        details: 'Listen to your favorite music, podcasts and audiobooks.',
        type:'Spotify'
    },
    {
        id: 4,
        logo:logos[3].image,
        title: 'Youtube Music',
        details: 'Easily explore the world of music ad-free, offline, and with the screen locked.',
        type:'Youtube'
    },
   
];