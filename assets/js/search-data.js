// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "news-i-graduated-summa-cum-laude-with-a-bachelor-s-degree-in-communications-and-information-engineering-from-zewail-city-of-science-and-technology",
          title: 'I graduated summa cum laude with a bachelor’s degree in Communications and Information...',
          description: "",
          section: "News",},{id: "news-i-defended-my-master-s-thesis-titled-quickdrawgt-training-a-transformer-to-draw-on-a-fixed-size-canvas",
          title: 'I defended my master’s thesis titled “QuickDrawGT: Training a Transformer to Draw on...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
