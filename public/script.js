// document.getElementById('download').addEventListener('click', async () => {
//     const url = window.location.href;
//     const response = await fetch('/download-invoice', {
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify({url})
//     })
// })

document.getElementById("filename").addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("csv").click();
});

document.getElementById("csv").addEventListener('change', (e) => {
    let filename = e.target.value;
    const temp = filename.split("\\");
    filename = temp[temp.length-1];
    document.getElementById("filename").innerText = filename;
});