import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;


const crearInputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>

        <label>Selecciona una fotografia: </label>
        <input type="file" accept="image/png, image/jpeg, image/gif">
        <br>
        <img id="foto" class="img-thumbnail" src="">
    `;

const div = document.createElement('div');
div.innerHTML = html;

body.append( div );

inputFile = document.querySelector("input");
imgFoto   = document.querySelector("#foto");

}

const eventos = () => {

    inputFile.addEventListener("change", ( e ) => {
        const file = e.target.files[0];
        subirImagen( file )
            .then( ( { secure_url } ) => imgFoto.src = secure_url );
        console.log(file);
    })


}


export const init = () => {

    crearInputFileHtml();
    eventos();

}

