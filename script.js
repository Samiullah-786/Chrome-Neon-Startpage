const $ = s => document.querySelector(s);
const clock = $('#clock'),
    dateLine = $('#dateLine'),
    greeting = $('#greeting');

function tick() {
    const now = new Date();
    clock.textContent = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(now); dateLine.textContent = new Intl.DateTimeFormat(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(now); const hour = now.getHours();
    const hello = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    greeting.innerHTML = `${hello}, <span>Sami</span><b>✦</b>`
}
tick(); setInterval(tick, 1000);

const searchForm = $('#searchForm'),
    searchInput = $('#searchInput');

searchForm.addEventListener('submit', event => {
    const raw = searchInput.value.trim();
    if (!raw) {
        event.preventDefault();
        searchInput.focus();
        return
    }
    const looksLikeUrl = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(raw);
    if (looksLikeUrl) {
        event.preventDefault();
        const url = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
        window.open(url, '_blank', 'noopener,noreferrer')
    }
});

document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        event.preventDefault(); searchInput.focus()
    }
    if (event.key === 'Escape' && document.activeElement === searchInput) searchInput.blur()
});
