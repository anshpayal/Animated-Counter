const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    //console.log(counter);

    counter.innerHTML=0;

    const updateCounter= ()=>{
        let targetcount= +counter.getAttribute('data-target')    //By default type of data-target is string so to convert it into number we.used plus(+)operator before counter.getAttribute('data-target').

        //console.log(typeof targetcount);
        let startingCount= +counter.innerHTML;
        
        const incr= targetcount/100;            //here we divide the targetcount by 100 because we want to show the increment in diffrence of 100.

        if(startingCount<targetcount){
            counter.innerHTML= `${Math.round(startingCount+incr)}`;
            setTimeout(updateCounter,10)
        }
        else{
            counter.innerHTML=targetcount;
        }
    }

    updateCounter();
})
