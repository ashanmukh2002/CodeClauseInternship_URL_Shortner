let btn = document.getElementById('shorten');
btn.addEventListener('click' , short);

async function short()
{
   let longurl = document.getElementById('longurl').value;
   let shorturl = document.getElementById('shorturl');

   const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
   const data = await result.json();

   shorturl.value = data.result.short_link2;
}

//copy btn
let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");
coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}