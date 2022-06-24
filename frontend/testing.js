
console.log("Can this even work??")
var form=document.getElementById("user_input")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    var sname=form.elements[0]
    var platforms_user=[]
    var form_checkboxes=form.elements['platform']
    for (let i = 0; i < form_checkboxes.length; i++) {
        if(form_checkboxes[i].checked){
            platforms_user[platforms_user.length]=form_checkboxes[i].id
        }
    }
    if(sname.value==""){
        form.elements[0].style.borderColor="red"
    }else{
        var data_js={
            songname:sname.value,
            platforms:platforms_user
        }
    
        fetch("http://localhost:3000/sendsongname",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data_js)
        }).then(response => response.json())
        .then((body) => {
            formattheMessage(body,sname);
        })
        .catch(err=>{
            console.log(err)
        })
        }

})

function submitbutton(){
    
}

function formattheMessage(jsonRes,sname){
    var str_clip=""
    str_clip=str_clip+sname.value+"\n"
    for(let i=0;i<jsonRes.length;i++){
        str_clip=str_clip+jsonRes[i].platform+"\n"
        str_clip=str_clip+jsonRes[i].link+"\n"
        console.log(jsonRes[i].link)
    }
    console.log(str_clip)
    navigator.clipboard.writeText(str_clip)
    
    
}
