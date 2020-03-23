async function main(){
   var data = await fetch('https://coronavirus-19-api.herokuapp.com/countries').then(d=>d.json())
   data = data.filter(c => c.country == 'Egypt')[0]
    //YOU CAN CHANGE THE COUNTRY HERE ^
   document.querySelector('#cases').innerHTML = data.cases
   document.querySelector('#today').innerHTML = data.todayCases
   document.querySelector('#deaths').innerHTML = data.deaths
   document.querySelector('#recovered').innerHTML = data.recovered
    document.querySelector('.loading').style.visibility = 'hidden'
} 
main()


document.querySelector('.info').addEventListener('click', e=> {
    document.querySelector('.message').classList.toggle('on')
})

document.querySelector('#messageClose').addEventListener('click', e=>{
    document.querySelector('.message').classList.remove('on')
})

document.querySelector('html').addEventListener('click',e=>{

    if(!e.target.classList.contains('info') && !e.target.classList.contains('message') && e.target.id != 'messageClose') document.querySelector('.message').classList.remove('on')

})