const button = document.querySelector('.btn');
const geo = document.querySelector('.geo');
const geoTime = document.querySelector('.geoTime');



button.addEventListener('click', () => geoSearch());

function geoSearch(){
    let latitude  = "";
    let longitude = "";
    const error = () => {
        geo.textContent = 'Невозможно получить ваше местоположение';
      }
            
      const success = (position) => {
         latitude  = position.coords.latitude;
         longitude = position.coords.longitude;
         let xhr = new XMLHttpRequest();
         xhr.open('GET', `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`);
         xhr.onload = function() {
             if (xhr.status != 200) { 
               console.log('Статус ответа: ', xhr.status);
             } else {
                       
               let result = JSON.parse(xhr.response);
               console.log('Результат: ', result);
               geo.textContent = `Времененная зона нахождения пользователя: ${result.timezone}`
               geoTime.textContent = `Местное дата и время: ${result.date_time_txt}`
             }
           };
           
           xhr.onprogress = function(event) {
             
             console.log(`Загружено ${event.loaded} из ${event.total}`)
           };
           
           
           xhr.onerror = function() {
             
             console.log('Ошибка! Статус ответа: ', xhr.status);
           };
           
          
           xhr.send();
      }
    



   
      
      
     
     
    
      if (!navigator.geolocation) {
          geo.textContent = 'Geolocation не поддерживается вашим браузером';
      } else {
          
          navigator.geolocation.getCurrentPosition(success, error);
      } 
    
}