//Day 14. 
//Question # 40. Album...
function make_album(artist: string, title: string, tracks?: number){
    let album = {artist,title}
    if (tracks) {

       album['artist']= artist
    }

    return album
}

    console.log(make_album ("Artist One","The First Album"));
    console.log(make_album("Artist Two", "The Second Album"));
    console.log(make_album("Artist Three","The Third Album", 12));

    //Question #41. Magicians..
    let magicians: string[]= ["David","Alice","Charle"]
    function show_magicians(magicians:string[]){
        magicians.forEach(magician=>
            {
                console.log(magician);

        })
            
    }
    show_magicians(magicians)

    //Question # 42. Great Magicians.
    let magicians2: string[] =["David", "Charle","Alice"];
    function show_magicians2(magicians2:string[]){
        magicians2.forEach((magicians2)=>{
            console.log(magicians2);
        });
    }
    function make_great(magicians2: string[]){
        for (let i = 0;i < magicians2.length; i++){
            magicians2[i]= magicians2[i] + "the Great";
        }
    }
    make_great(magicians2);
    show_magicians2(magicians2);