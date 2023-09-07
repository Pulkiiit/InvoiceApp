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