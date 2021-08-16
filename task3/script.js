const button = document.querySelector('.btn');
const displaySize = document.querySelector('.disp');
const geo = document.querySelector('.geo');



button.addEventListener('click', () => {geoSearch() , displaySearch()});

function displaySearch(){
    let displayWidth = window.screen.availWidth;
    let displayHeigth = window.screen.height;
    displaySize.innerHTML = `
    Ширина экрана в пикселях = ${displayWidth} px
    Высота экрана в пикселях = ${displayHeigth} px
    `
}



function geoSearch(){
  
    const error = () => {
        geo.textContent = 'Невозможно получить ваше местоположение';
      }
      
      
      const success = (position) => {
        
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
      
        geo.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
        
      }
    
    geo.textContent = '';
    
    if (!navigator.geolocation) {
        geo.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        geo.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

    
}