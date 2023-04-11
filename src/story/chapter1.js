export const insertHTML = () => {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `
        <header class = "header">
            <h1 class = "tittle">Capítulo 1</h1>
        </header>

        <div class = "container1">
            <figure>
                <img class = "storyImage" src="../story_images/chapter1.png" alt = "Dead" width = "300" height = "300">
                <figcaption class = "storyCaption"> Jim en su casa</figcaption>
            </figure>
            
            <p class = "storyText">
                Tu nombre es Jim, eres un hombre de 30 años, casado con una mujer llamada Mary, y tienes un hijo llamado John.
                En un día habitual como hoy, vas a trabajar a un laboratorio donde hacen experimentos biológicos. 
                En este lugar tu lideras una investigación enfocada a la manipulación del material genético de diferentes virus. 
                <br>
                Actualmente, tu esposa se encuentra muy enferma en cama. Puedes decidir entre quedarte con tu esposa o ir a trabajar 
                y regresar mas noche.
            </p>

            <a class = "option" href = "./chapter2-1.html">Ir a trabajar</a>
            <br>
            <a class = "option" href = "./chapter2-2.html">Quedarte con tu Esposa</a>
        </div>

    `;
}

window.onload = () => {
    insertHTML();
}