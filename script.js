let totalcount=0;
function turnBlueLike(){
    checkAndSet();
    let op=document.getElementById('dislike-btn');
    if( op.getAttribute("class")==="btn btn-primary"){
        op.setAttribute("class","btn btn-light")
    }
    let btn= document.getElementById('like-btn');    
    btn.setAttribute("class","btn btn-primary")
    localStorage.setItem('likes',parseInt(localStorage.getItem('likes'))+1);
    let likesCount=localStorage.getItem('likes');
    document.getElementById('likes-count').innerText=likesCount;
    totalcount=parseInt(localStorage.getItem('likes'))+parseInt(localStorage.getItem('dislikes'));
    document.getElementById('total-count').innerText=totalcount;
}

function turnBlueDisLike(){
    checkAndSet();
    let op=document.getElementById('like-btn');
    if( op.getAttribute("class")==="btn btn-primary"){
        op.setAttribute("class","btn btn-light")
    }
    let btn= document.getElementById('dislike-btn');    
    btn.setAttribute("class","btn btn-primary")
    localStorage.setItem('dislikes',parseInt(localStorage.getItem('dislikes'))+1);
    let dislikesCount=localStorage.getItem('dislikes');
    document.getElementById('dislikes-count').innerText=dislikesCount;
    totalcount=parseInt(localStorage.getItem('likes'))+parseInt(localStorage.getItem('dislikes'));
    document.getElementById('total-count').innerText=totalcount;

}

function checkAndSet(){
    if(document.getElementById('likes-count').innerText===""){
        localStorage.setItem('likes',0);
    }else{
        localStorage.setItem('likes',document.getElementById('likes-count').innerText);
    }
    if(document.getElementById('dislikes-count').innerText===""){
        localStorage.setItem('dislikes',0);
    }else{
        localStorage.setItem('dislikes',document.getElementById('dislikes-count').innerText);
    }
}
