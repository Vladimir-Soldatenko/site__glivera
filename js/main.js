
'use strict'

const posts = [
    {
        "title": "The Internet Cannot be Trusted – Beamsplitters, Backdoors, and Broken Promises",
        "name": "Derek Zimmer",
        "date": " |  JUL 25, 2018",
        "tags": "Governments, Networking, Open Source, Privacy, Security",
        "comments": 0,
        "image": "./img/posts1.webp"
    },
    {
        "title": "How to get cheaper flights using a VPN",
        "name": "Jayson",
        "date": " |  JUL 24, 2018",
        "tags": "Guides",
        "comments": 0,
        "image": "./img/posts2.webp"
    },
    {
        "title": "Net Neutrality was repealed, but the fight is far from over",
        "name": "Chris Miller",
        "date": "  |  JUL 22, 2018",
        "tags": "Governments, Net Neutrality, News",
        "comments": 0,
        "image": "./img/posts3.webp"
    },
    {
        "title": "The Internet Cannot be Trusted – Beamsplitters, Backdoors, and Broken Promises",
        "name": "Derek Zimmer",
        "date": " |  JUL 25, 2018",
        "tags": "Governments, Networking, Open Source, Privacy, Security",
        "comments": 0,
        "image": "./img/posts1.webp"
    },
    {
        "title": "How to get cheaper flights using a VPN",
        "name": "Jayson",
        "date": " |  JUL 24, 2018",
        "tags": "Guides",
        "comments": 0,
        "image": "./img/posts2.webp"
    },
    {
        "title": "Net Neutrality was repealed, but the fight is far from over",
        "name": "Chris Miller",
        "date": "  |  JUL 22, 2018",
        "tags": "Governments, Net Neutrality, News",
        "comments": 0,
        "image": "./img/posts3.webp"
    }
    
]



const postsWrapper = document.querySelector('.posts__wrapper');
function renderPosts(posts){
    posts.forEach(post => {
        const postHtml = `
                        <div class="posts__card">
                            <img src="${post.image}" alt="" class="posts__card__img">
                            <div class="posts__card__info">
                                <h3 class="tv__info__title posts__card__info__title">${post.title}</h3>
                                <div class="tv__info__user">
                                    <p class="tv__info__user__name posts__card__info__user__name">${post.name}</p>
                                    <p class="tv__info__user__date gray posts__card__info__user__date">${post.date}</p>
                                </div>
                                <p class="tv__info__text posts__card__info__text">${post.tags}</p>
                                <p class="tv__info__comments posts__card__info__comments gray">${post.comments}</p>
                            </div>
                        </div>
                    `;
        postsWrapper.insertAdjacentHTML('beforeend', postHtml)
    });
}

renderPosts(posts)

let burgerBtn = document.querySelector('.burger__menu__btn');
let burgerNav = document.querySelector('.burger__menu__nav');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    burgerNav.classList.toggle('active');

})