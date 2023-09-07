document.getElementById('download').addEventListener('click', async () => {
    try { 
        const url = window.location.href;
    const response = await fetch('/download-invoice', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({url})
    })
    if (!response.ok) {
        throw new Error('Error');
    } 
    } catch (error) {
        console.log('error : ', error);
    }
})