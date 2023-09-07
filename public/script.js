document.getElementById('download').addEventListener('click', async () => {
    const url = window.location.href;
    const response = await fetch('/download-invoice', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({url})
    })
})