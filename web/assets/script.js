/* JS Document */
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

function setInnerValue(id, val) { // id and value return nothing 
    element = document.getElementById(id);
    if (element != null) { // only if not null
        element.innerHTML = val; // change object with id to val
    }
}

function main() {

    console.log(atob(getCookie("api"))); // values stored as cookie 

    let obj = JSON.parse( // Json object wrapped in b64
        atob(
            getCookie("api") // we use our api cookie
        )
    );
    console.log(obj.delay);
    setInnerValue("delay", obj.delay);
    if (obj.Success) {
        setInnerValue("Status", "✅ Good");
        setInnerValue("delay", obj.delay);
    } else {
        console.log("there was an error "+obj.Error);
        setInnerValue("error", obj.Error);
        setInnerValue("Status", "❌Failure");
        return
    }

    for (var id in obj.Arguments) {
        setInnerValue(id, obj.Arguments[id]); //set all elements with id to their value sharing the same id
    }

}
main();
