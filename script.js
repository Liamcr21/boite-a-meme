console.log("loaded");

 function toBase64(r) {
           
            document.getElementById("img").src = r;
            console.log(r);
         }

function gen()
{
    console.log("click");

    let truc = fetch("https://v1.api.amethyste.moe/generate/ddungeon",
    { 
        method: "POST",
        headers: 
        {
            'Authorization': "Bearer " + token.value,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams({
            'url': image.value,
        })
    });

    truc.then(r => r.blob())
    .then(r => {
        let reader=new FileReader()
        reader.addEventListener('loadend',()=>{
        let contents=reader.result
        toBase64(contents)
        })
        reader.readAsDataURL(r)
    });

}