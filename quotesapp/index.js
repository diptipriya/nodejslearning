

const api="";
//const newquotes=document.getElementById("newquotes");
//const quotes=document.getElementById("quotes");

//const author=document.getElementById("author");
const getquotes= async ()=>{


    const api="http://type.fit/api/quotes";


try
{
    let data= await fetch(api);
    console.log(data.json());



   // const realData=data.json();
   // console.log(realData);

    //console.log(realData[10].text);
   // console.log(realData[10].author);
}

catch(error){

    console.log("something went wrong");
}

}

getquotes();










    