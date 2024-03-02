async function getPosts(){
   const response= await axios({
        method: 'get',
        url: 'https://dummyjson.com/posts',
        // responseType: 'stream'
      })
      let posttss = response.data.posts;
      console.log(posttss)
      let result = posttss.map(function (ele){
                    // console.log(ele.reactions)
                    return `
                    <div class="card">
                    <h6 class="user-id">
                    ${ele.userId}
                    </h6>
                    <span class="titlee">${ele.title}</span>
                    <p class="bodyy">
                    ${ele.body}
                    </p>
                    <p class="tagss">
                     # ${ele.tags}
                    </p>
                    <span class="reactionss">
                    ${ele.reactions}  Reactions  
                    </span>
                    </div>
                    `
                }).join('')

        // .then(function (response) {
        //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        // });





















    // const axios = require('axio);
    // try {
    //     const response = await axios.get('https://dummyjson.com/posts');
    //     console.log(response);
    //         let d = await response.data.json();
    //         console.log(d)
    //         let p = d.posts
    //         console.log(p)
    //        
    //     } catch (error) {
    //     console.error(error);
    //     } 
        document.querySelector('.post').innerHTML = result

}

getPosts()


