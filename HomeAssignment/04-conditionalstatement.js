/* 
function launchBrowser(browserName) // function naem 
{



  if (browserName === "chrome") 
    {
     console.log("Launch chrome browser")
    }
    else if( browserName == "edge")
     {
        console.log("lauch edge browser")
    }
 else
     {
    console.log("do not launch any browsert")
      }
}

launchBrowser("edge")

 */

function runTests(){

    switch (testType) {
        case "automation":
            
            console.log("automation testing");
            break;
            ;
        case "sanity":
            console.log("sanity testing");
            break;
        case "regression":
            console.log("regression testing");
            break;

    
        default:
            console.log("smoke testing");
            
            break;
    }
}

let testType = "automation"
runTests() 