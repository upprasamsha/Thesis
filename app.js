document.addEventListener('DOMContentLoaded',function(){

    const  consentButton=document.getElementsByClassName('consent');
    const submitButton=document.getElementsByClassName('submitbutton');
    const videoButton=document.getElementsByClassName('watchedVideoButton');
    const finalButton= document.getElementsByClassName('finalSubmitButton');

    if(consentButton.length>0){
        consentButton[0].addEventListener('click', function(){
        // for upadhgaya: we use consentbutton[0], becuase getElementbyClassName gets a collection of   html  and we cannot put an event handler on an collection.
            window.location.href='landingpage.html';
       
            console.log(" click function triggered");
        })
    }
    if(submitButton.length>0){
        submitButton[0].addEventListener('click',function(){
            downloadTextFile();
            setTimeout(function(){
                window.location.href='videopage.html';
            })
           
        })

    }
    
    if(videoButton.length>0){
        videoButton[0].addEventListener('click',function(){
            window.location.href='finalReply.html';
        })
    }
    
    if(finalButton.length>0){
        finalButton[0].addEventListener('click',function(){
            downloadFinalTextFile();
        })
    }

    function downloadTextFile(){
        const inputText=document.getElementById('customerInput').value;
        const textBlob=new Blob([inputText],{type:'text/plain'});
        const downloadLink=document.createElement('a');
        downloadLink.href=URL.createObjectURL(textBlob);

        downloadLink.download='user-response.txt';

        document.body.appendChild(downloadLink);
        
        downloadLink.click();
        document.body.removeChild(downloadLink);

    }
    function downloadFinalTextFile(){
        const inputText=document.getElementById('finalReply').value;
        const textBlob=new Blob([inputText],{type:'text/plain'});
        const downloadLink=document.createElement('a');
        downloadLink.href=URL.createObjectURL(textBlob);

        downloadLink.download='user-response.txt';

        document.body.appendChild(downloadLink);
        
        downloadLink.click();
        document.body.removeChild(downloadLink);

    }



})