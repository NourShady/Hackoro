/// pages links
const root = ''
const pageLinks = [
    { name: 'index', link: '/' },
    { name: 'home', link: 'home.html' },
    { name: 'add_user', link: 'add_user.html' },
    { name: 'search', link: 'search.html' },
  
  ];

  // Define a function to get the link based on the page name
  function go_to(pageName, var_pass) {
    // Find the object in the array that matches the given page name
    const page = pageLinks.find(item => item.name === pageName);
    redirectToLogin( page ? page.link : null, var_pass);
  }


  function redirectToLogin(path_to_page, var_pass) {
      window.location.href =root+ path_to_page + "?data=" + encodeURIComponent(var_pass);
      
    }
    ///// end
    function receivedData (){
        return decodeURIComponent(new URLSearchParams(window.location.search).get('data'));
    }