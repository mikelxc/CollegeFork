function dropdownMenu(){
            var x= document.getElementById("dropdownClick");
            if (x.className === "topNav") {
                x.className += " responsive" ;
            }
            else{
                x.className ="topNav";
            }
        }