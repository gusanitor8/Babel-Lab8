export const insertHTML = () => {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `
    <header class = "header">
        <h1 class = "tittle">Capítulo 2</h1>
    </header>

    <div class = "container1">
        <figure>
            <img class = "storyImage" src="../story_images/chapter2-2.png" width = "300" height = "300">
            <figcaption class = "storyCaption">Jim y el Dr. Smith en el laboratorio</figcaption>
        </figure>
        
        <p class = "storyText">
            Te quedas en casa descansando en un sillón, mientras tanto tu esposa se encuentra en cama.
            Piensas que probablemente deberías hacer algo por ella ya que después de todo, te quedaste 
            en casa por ella. Piensas que probablemente tenga hambre ya que todavía no ha desayunado.
            Pero ahora que lo piensas, no has visto como se encuentra. ¿Qué haces?
        </p>

        <a class = "option">Ir con tu esposa al cuarto</a>
        <br>
        <a class = "option">Ir a la cocina por algo de comer para tu esposa</a>
    </div>

    `;
}

window.onload = () => {
    insertHTML();
}