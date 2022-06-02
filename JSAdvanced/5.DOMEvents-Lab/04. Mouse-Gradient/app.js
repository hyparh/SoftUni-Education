function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onHover);

    let result = document.getElementById('result');

    function onHover(event) {
        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%';
    }
}