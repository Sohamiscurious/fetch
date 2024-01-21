document.addEventListener('DOMContentLoaded', function(){
    const tweetForm = document.getElementById('tweetForm');
    const tweetText = document.getElementById('tweetText');
    const responseDiv = document.getElementById('response');

    tweetForm.addEventListener('submit', function(){
        event.preventDefault();

        const tweet = tweetText.value;

        //make a http post request to the backend
        fetch('https://one00x-data-analysis.onrender.com/posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({tweet}),
        })
        .then(response =>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Tweet posting failed');//handling failure
            }
        })
        .catch(error =>{
            //Handle error
            responseDiv.innerText= 'Error: ${error.message}';
        });
    });
})