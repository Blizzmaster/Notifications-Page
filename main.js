const markAll = document.querySelector('#mark-all'); // Read all message link
const counter = document.querySelector('.counter'); // NI\otification Counter

// Unmark All
markAll.addEventListener('click', ()=>{

    const posts = document.querySelectorAll('.unread')

    if (posts.length > 0)
    {
        const track = document.querySelectorAll('.read-status')

        posts.forEach(item => {
            item.classList.remove('unread')
        })

        track.forEach(item => {
            item.classList.remove('read-status')
        })

        updateNotificationCounter()
    }
});

// Unmark by one

const posts = document.querySelectorAll('.unread')
posts.forEach(item => {

    item.addEventListener('click',  ()=>{
        item.classList.remove('unread')

        const readStatusElement = item.querySelector('.read-status');
        if (readStatusElement) {
            readStatusElement.classList.remove('read-status');
        }

        updateNotificationCounter()
    })

})

function updateNotificationCounter()
{
    const markAllRemains = document.querySelectorAll('.unread');
    counter.innerHTML = markAllRemains.length
}