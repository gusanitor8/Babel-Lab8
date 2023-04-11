export const insertHTML = () => {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `
        <header class = "header">
            <h1 class = "tittle">Capítulo 2</h1>
        <header>

        <div class = "container1">
            <figure>
                <img class = "storyImage" src="../story_images/chapter1-1" width = "300" height = "300">
                <figcaption class = "storyCaption">Jim y el Dr. Smith en el laboratorio</figcaption>
            </figure>
            
            <p class = "storyText">
            Llegaste a el trbaajo, tienes mucho trabajo por hacer. Algunos de tus compañeros de 
            trabajo te contaron acerca de un nuevo descubrimiento. Parece que se trata de un 
            virus peligroso. Sin embargo, tu amigo y compañero de trabajo, el Dr. Smith, llega a hablarte
            y te ofrece ir por un café. ¿Qué haces?
            </p>

            <a class = "option">Ir por un café con el Dr. Smith</a>
            <br>
            <a class = "option">Quedarse en el laboratorio</a>
        </div>
    `;
}

window.onload = () => {
    insertHTML();
}