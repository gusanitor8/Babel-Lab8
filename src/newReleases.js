export const insertHTML = () => {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `
        <header class = "header">
            <h1 class = "tittle">New Releases</h1>
        </header>

        <div class = "container">
            <ul>
                <li class = "list_item">
                    <a href="./story/chapter1.html"> <b>LIBRO ULTRA SECRETO NO DAR CLICK</b> - <i>????</i> </a>
                </li>
            </ul>
        </div>

    `;
}

window.onload = () => {
    insertHTML();
}