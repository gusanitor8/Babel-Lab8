export const insertHTML = () => {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `
        <header class = "header">
            <h1 class = "tittle">Libros Populares</h1>
        </header>

        <div class = "container">
            <ul>
                <li class = "list_item">
                    <a href = "https://www.goodreads.com/book/show/400270.We_Can_Build_You">
                        <b>We Can Build You</b> - <i>Philip K. Dick</i>
                    </a>
                </li>

                <li class = "list_item">
                    <a href = "https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore">
                        <b>Kafka on The Shore</b> - <i>Haruki Murakami</i>
                    </a>
                </li>

                <li class = "list_element">
                    <a href = "https://www.goodreads.com/book/show/170448.Animal_Farm">
                        <b>Animal Farm</b> - <i>George Orwell</i> 
                    </a>
                </li>
            </ul>
        </div>
    `;
}

window.onload = () => {
    insertHTML();
}