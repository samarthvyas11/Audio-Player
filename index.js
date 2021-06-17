// var loading_div = document.getElementById('loader_main');

// function remove_loader(){
//     loading_div.style.display = 'none';
// }

var music_list = ['Aaja Nachle','Aaye Ho Meri','Abhi Kuch Dino Se', 'Ae Dil Hai Mushkil','Andekhi Anjaani si','Baby Doll','Brown Rang','Gerua','Jaan Meri ja rhi','Maula Mere Maula ','Sab Tera','SITC - Saibo','Teddy Bear','Tere Bin','Tere Sang Yaara','Teri Jhuki Nazar','Tujh Mein Rab','Aksar Is Dunniya','Baby Ko Bass ','Bhaage Re Mann ','Muskurane Ki Waja']

function songs_page()
{   
    console.log("heelo")
    k1 = document.getElementsByClassName("Player_page")
    k1[0].style.display="none";
    k2 = document.getElementsByClassName("Songs_page")
    k2[0].style = "background-image: url(media/songback.png);background-repeat:no-repeat;";
    at_start();
}




function at_start()
{
    var music_show = '';
    for(var i = 0;i < music_list.length;i++)
    {  
        music_show += '<div style="display:flex;"><h3 class="particular_music">'+ music_list[i].toString() +'</h3>' + '<i class="fa fa-play-circle-o" style="font-size:36px;color: black;margin-top: 9px;margin-left: 4%;" onclick="play('+(i+1).toString()+')"></i></div>'

    }
    k1 = document.getElementsByClassName('list');
    k1[0].innerHTML = music_show;
}

function play(n)
{   let song_name =  '01 - '+ music_list[n-1]
    console.log("I am here")
    s1 =  '<audio controls loop autoplay><source src="media/' + song_name + '.mp3"></audio>'
    k1 = document.getElementsByClassName('play_bar')
    console.log(s1)
    k1[0].innerHTML = s1;
    console.log(k1)
    k1 = document.getElementsByClassName("Player_page")
    k1[0].style.display =  "block"
    k2 = document.getElementsByClassName("Songs_page")
    k2[0].style.display = "none";

}