// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
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
        },{id: "post-everything-you-need-to-know-about-backpropagation",
        
          title: "Everything You Need to Know About Backpropagation",
        
        description: "A deep dive into the backpropagation algorithm",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/backprop/";
          
        },
      },{id: "post-sui-generis-erc",
        
          title: "Sui Generis (ERC)",
        
        description: "Sui Generis (ERC)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/ERC/";
          
        },
      },{id: "post-linear-algebra-part-01-identities",
        
          title: "Linear Algebra Part 01: Identities",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/LA-01/";
          
        },
      },{id: "post-reimplementing-python-39-s-heapq-module",
        
          title: "Reimplementing python&#39;s heapq module",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/python-heapq/";
          
        },
      },{id: "news-i-graduated-summa-cum-laude-with-a-bachelor-s-degree-in-communications-and-information-engineering-from-zewail-city-of-science-and-technology",
          title: 'I graduated summa cum laude with a bachelor’s degree in Communications and Information...',
          description: "",
          section: "News",},{id: "news-i-graduated-with-distinction-from-the-ai-for-science-master-s-program-at-aims-south-africa-funded-by-google-deepmind",
          title: 'I graduated with distinction from the AI for science master’s program at AIMS...',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/0xgeorgeassaad", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/0xgeorgeassaad", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/0xgeorgeassaad", "_blank");
        },
      },{
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
