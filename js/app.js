$(document).ready(function(){
 $("#searchForm").submit(function(event) {
    event.preventDefault(); 
    var $form = $(this),
        user = $form.find( 'input[name="user"]' ).val(),
        pass = $form.find( 'input[name="pass"]' ).val(),
        url = $form.attr( 'action' );
        $.get( url, {user: user, pass: pass}, function(data) {
         var options = {
            username: '', // your fluidinfo username
            password: '',
            instance: 'main'
          };
       var session = fluidinfo(options);
       var options = {
        select: ["elfilo.net/drupalblog/title", "elfilo.net/drupalblog/url"],
        where: 'elfilo.net/drupalblog/trakitana matches "arduini"',
        onSuccess: function(res){
          console.log(res);
          console.log(res.data.length);
          var fluidinfo_url = [];
          var winter_url = [];
          _.each(res.data, function(value){
            fluidinfo_url.push(value["elfilo.net/url"]);
          });
          _.each(json, function(key, value){
            winter_url.push(key.url);
          });
          var url =_.difference(winter_url, fluidinfo_url);
          _.each(json, function(key, value){
            if(key.url == url){
              console.log(json[value]);
            }
          });
          // console.log(json);

          // console.log(json);
          // _.difference(res)
        },
        onError: function(err){
          console.log(err);
        }
       }
       session.query(options);
// var options = {
// tags: ["elfilo.net/author", "elfilo.net/title", "elfilo.net/created_on", "elfilo.net/twitter", "elfilo.net/day", "elfilo.net/month", "elfilo.net/year", "elfilo.net/domains", "elfilo.net/tags", "elfilo.net/related-authors"], where: 'fluiddb/about="osc"', onSuccess: function(result) {
// // handle success
// },
// onError: function(result) {
// // handle errors
// } };
// session.del(options);
       // var options = { 
       //   values: {
       //    "elfilo.net/author": "karlos g liberal",
       //    "elfilo.net/title": "Arduino controlando un servo mediante node.js",
       //    "elfilo.net/created_on": "2011-04-11 14:00",
       //    "elfilo.net/twitter": "patxangas",
       //    "elfilo.net/day": "11",
       //    "elfilo.net/month": "04",
       //    "elfilo.net/years": "2011",
       //    "elfilo.net/domains": ["blog.elfilo.net"],
       //    "elfilo.net/tags": ["arduino", "nodejs"],
       //    // "elfilo.net/related-posts": ["post:http://blog.elfilo.net/articles/arduino-serve-nodejs/index.html"]
       //   },
       //   about: "http://blog.elfilo.net/articles/arduino-serve-nodejs/index.html", 
       //   onSuccess: function(result) {
       //     console.log('hola');
       //     console.log(result);
       //   },
       //   onError: function(result) {
       //      console.log(result)
       //   } 
       //  };
       // var options = {
       //   values: {
       //    "patxangas/post_title": "Arduino controlando un servo mediante node.js",
       //    "patxangas/post_f": "Arduino controlando un servo mediante node.js",
       //   },
       //   about: "http://blog.elfilo.net/articles/arduino-serve-nodejs/index.html", 
       //   onSuccess: function(result) {
       //     console.log('hola');
       //     console.log(result);
       //   },
       //   onError: function(result) {
       //      console.log(result)
       //   } 
       //  };
        // session.tag(options);
      }
    );
  });

});
