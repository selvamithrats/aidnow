function nextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function prevPage() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
}

function submitRequest() {
    // Logic to handle form submission
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
}

// Event listener to update the count for each item
document.querySelectorAll('.item-count').forEach(item => {
    item.addEventListener('input', function () {
        let itemId = this.dataset.itemId;
        let count = this.value;
        document.getElementById(itemId + 'Count').textContent = `(${count})`;
    });
});










