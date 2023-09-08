let myleads =[]

const inputel = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")
const deletebtn =document.getElementById("delete-btn")

const leadsfromlocalstroage = JSON.parse(localStorage.getItem("myleads"))

const tabbtn =document.getElementById("tab-btn")
//console.log(leadsfromlocalstroage)


if (leadsfromlocalstroage){
    myleads = leadsfromlocalstroage
    render(myleads)
}



    
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow :true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    })
    
})


function render(leads){
    let listitems=""
    for (let i =0; i <leads.length;i++){
        listitems +=`
            <li>
                <a target ='_blank' href='${leads[i]}'>
                 ${leads[i]}
                  </a>
            </li>
        `
    }
    ulel.innerHTML= listitems
}


deletebtn.addEventListener("dblclick",function(){
    console.log("double clicked!")
    localStorage.clear()
    myleads =[]
    render(myleads)
})
inputbtn.addEventListener("click",function()
{
    myleads.push(inputel.value)
    inputel.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
})




