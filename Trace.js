const grid = document.getElementById("grid");
const totalCells=380;
for (let i=0; i<totalCells;i++){
    const dot = document.createElement("div");
    dot.classList.add("dot");
    grid.appendChild(dot);
}

    
    function getDayOfYear(){
        const today = new Date();
        const start = new Date(today.getFullYear(),0,0);
        const diff = today-start;
        const oneDay=1000 * 60*60*24;
        return Math.floor(diff/oneDay);
    }
    
    const dayOfYear = getDayOfYear();
    
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot,index)=>{
            if(index<dayOfYear){
                dot.classList.add("filled");
            }
        });
    function isLeapYear(year){
        return (year%4===0 && year%100!==0) || (year%400===0);
    }
    const currentYear = new Date().getFullYear();
    const totalDays = isLeapYear(currentYear) ? 366 : 365;
    dots.forEach((dot,index)=>{
        if(index<dayOfYear-1){
            dot.classList.add("filled");
        }
        
        else if(index>=totalDays){
            dot.classList.add("inactive");
        }


        else if (index===dayOfYear-1){
            dot.classList.add("today");
        }

    });
    
    const progresstext = document.getElementById("progress");
    progresstext.textContent = "Day "+ dayOfYear + " of " + totalDays

    function scheduleMidnightupdate(){
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24,0,0,0);
        const timeUntileMidnight= midnight-now;
        setTimeout(()=>{
            filldots();
            scheduleMidnightupdate();
        },timeUntileMidnight)
    }
    window.addEventListener("focus",()=>{
        filldots();
    })`1`