// AMIN - RNGBR - GITHUB : aminrngbr1122


async function fetch(url = ''){
    web = await fetch(url);
    return web.json();
}

// fetch('domain')
// .then((res)=>{
//     console.log(res);
// });