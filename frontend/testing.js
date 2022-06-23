
console.log("Can this even work??")
var submit=document.getElementById("callthebackend")
var sname=document.getElementById("songname")
console.log(submit.innerText)
// fetch from our own /sendsongname endpoint
// make the settings wala ui

// send it accrordingly 
//copy the results to clipboard
submit.addEventListener("click",submitbutton)
function submitbutton(){
    if(sname.value==""){

}else{
    var data_js={
        songname:sname.value,
        platforms:["Spotify","Apple Music","JioSaavn"]
    }

    fetch("http://localhost:3000/sendsongname",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data_js)
    }).then(response => response.json())
    .then((body) => {
        formattheMessage(body);
    })
    .catch(err=>{
        console.log(err)
    })
    }
}

function formattheMessage(jsonRes){
    var str_clip=""
    str_clip=str_clip+sname.value+"\n"
    for(let i=0;i<jsonRes.length;i++){
        str_clip=str_clip+jsonRes[i].platform+"\n"
        str_clip=str_clip+jsonRes[i].link+"\n"
        console.log(jsonRes[i].link)
    }
    navigator.clipboard.writeText(str_clip);

    console.log()
    
    
}
