var closeBtn = document.getElementsByTagName("LI");
var i;
for(i = 0; i < closeBtn.length; i++){
    var span = document.createElement("SPAN");
    var x = document.createTextNode("X")
    span.className = "xButton";
    span.appendChild(x);
    closeBtn[i].appendChild(span);
};

var close = document.getElementsByClassName("xButton");
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
};

var checked = document.querySelector('ul');
checked.addEventListener("click", function(a){
    if(a.target.tagName === 'LI'){
        a.target.classList.toggle('checked');
    }

}, false);

function newItem(){
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("Type Something!");
        } else {
        console.log(li);
        document.getElementById("list").appendChild(li);
        }
        document.getElementById("myInput").value = "";
      
       var span = document.createElement("SPAN");
       var x = document.createTextNode("X");
       span.className = "xButton";
       span.appendChild(x);
       li.appendChild(span);
      
       for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
           div.style.display = "none";
        }
    }
};
