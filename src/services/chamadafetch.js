fetch("./data.json")
.then((resp) => resp.json())
.catch((erro) => console.log(erro))
.then(({ comments, currentUser }) => {