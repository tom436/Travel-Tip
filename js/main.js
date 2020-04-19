import {mapService} from "./map-service.js";

window.addEventListener('load', mapService.init);
document.querySelector('.myLoc').addEventListener('click', mapService.setCurrPosition);
document.querySelector('.copyLoc').addEventListener('click', mapService.setCurrPosition);

window.addEventListener('load', getPosition);

