var about = document.getElementById('N');
about.addEventListener('click', bsdk);


var ID;
ID = document.querySelector('input').addEventListener('keyup', check);
function check()
 {
       return ID = this.value;
       
 }


function bsdk()
{
      
    
      
       var xhr = new XMLHttpRequest();
       xhr.open('GET',`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=500000000&videoId=${ID}&key=AIzaSyBsU5PwT17I-sl8KVcj1ddfKS5f6mI5INI`, true);
               xhr.getResponseHeader('Content-type', 'application/json')
           
       xhr.onload = function(){
              var str = JSON.parse(this.responseText);
             var data = str.items;
             var st = "";
                     for(var i = 0; i < data.length; i++)
                     {
                           
                 st += `<img  style="border-radius: 50%;" src='${data[i].snippet.topLevelComment.snippet.authorProfileImageUrl}'>
                 <a href="${data[i].snippet.topLevelComment.snippet.authorChannelUrl}" target = "_blank"> 
                 <h5>${data[i].snippet.topLevelComment.snippet.authorDisplayName}</h5> </a>
                 
                 <p>${data[i].snippet.topLevelComment.snippet.textOriginal}</p><br>
                  `
   
                     }
                     document.getElementById("C").innerHTML = st;
              
       }
      
       xhr.send();
}