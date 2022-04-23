var movie =[
        "https://hdqwalls.com/wallpapers/titanic-aw.jpg",
    "https://images.hdqwalls.com/download/1/wolverine-4k-new-3y.jpg",
    "https://wallpaperaccess.com/full/504774.jpg",
    // "http://www.hdwallpaperslife.com/wp-content/uploads/2019/04/joker-2019-76.jpg",
    "https://hdqwalls.com/wallpapers/hellboy-movie-4k-a4.jpg"
];

  localStorage.setItem("movieList",JSON.stringify(movie));

  let i = 0;
  let id;
  let image=document.createElement("img");
  image.id="imagesize";
  data=JSON.parse(localStorage.getItem("movieList"))||[];
 setInterval(function(){
      document.getElementById("slideshow").innerHTML=null;
      if(i==data.length){
          i=0;
      }
      image.src = movie[i];
      i++;
      document.getElementById("slideshow").append(image);
    },1000)


  let movies=[
     {
         url:"http://4.bp.blogspot.com/-tLNK0gpROGI/UEhx6fYo3WI/AAAAAAAAAB8/ptTh1NYLKzA/s1600/Best+Bollywood+Action+Movies+2012.jpg",
        name:"EK Tha Tiger",
        Release:"02/03/2015",
        Rating:8.5
    },
    {
        url:"https://filmfare.wwmindia.com/content/2019/dec/sab-kushal-mangal-upcoming-bollywood-movies-2020-21577106172.jpg",
       name:"Kushal Mangal",
       Release:"01/11/2018",
       Rating:8.0
   },

   {
    url:"https://c8.alamy.com/comp/F762X4/indian-bollywood-hindi-film-movie-poster-of-bol-bachchan-a-rohit-shetty-F762X4.jpg",
   name:"Bol Bachan",
   Release:"11/04/2014",
   Rating:9.0
},
{
    url:"https://i.ytimg.com/vi/G9ZV4NZ5Ulw/maxresdefault.jpg",
   name:"Tezz",
   Release:"10/08/2010",
   Rating:7.5
},
{
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnoF1WqH39QgypyJdaFus1f70AGjF_W9NXw&usqp=CAU",
   name:"DilWale New",
   Release:"05/03/2018",
   Rating:8.9
},
{
    url:"https://miro.medium.com/max/1308/1*Od2n02iddwVeJ8NVk4oRcg.jpeg",
   name:"Kabhi Khushi Khabi Gam",
   Release:"09/06/2019",
   Rating:6.5
},
  ]


localStorage.setItem("new_movie",JSON.stringify(movies));
var movieList = JSON.parse(localStorage.getItem("new_movie"));
// console.log("ml",movieList)


display(movieList);

function display(movieList)
{
document.getElementById("movies").innerHTML=null;
movieList.map(function(el){
  
    var box= document.createElement("div");
    var image = document.createElement("img");
    image.src=el.url;
    image.style.height="600px";
    image.style.width="700px";
    
    var box1 =document.createElement("div");
    box1.id="list"

    var title = document.createElement("h4");
    title.innerText=el.name;
    var date = document.createElement("h5");
    date.innerText=el.Release;
        var imdb = document.createElement("h3");
        imdb.innerText=el.Rating;
    box1.append(title,date,imdb);

        box.append(image,box1);
        document.getElementById("movies").append(box)
        
})
// }
}



function sorting(){
    var sorted = document.getElementById("sort").value
if(sorted=="inc"){
    movieList.sort(function (a,b)
    {
    if(a.Rating>b.Rating)
    return 1;
    if(a.Rating<b.Rating)
    return -1;
    return 0;
    })
    display(movieList);
}
if(sorted=="dec"){
    movieList.sort(function (a,b)
    {
    if(a.Rating>b.Rating)
    return -1;
    if(a.Rating<b.Rating)
    return 1;
    return 0;
    })
    display(movieList);

}
}






//   ]

