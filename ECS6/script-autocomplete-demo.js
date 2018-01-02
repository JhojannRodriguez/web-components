class peticion {
  constructor(input, url) {
    this.input = document.querySelector(input);
    this.url = url;
    this.start()
  }

  start(){
    this.getData();
  }

  getData(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET' ,this.url)
    xhr.send()

    return new Promise(function(resolve, reject) {
      xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState === 4) { if (xhr.status === 200) { resolve( this.createList() ) }
        reject(console.log('DATA WAS NOT LOADED')) }
      });
    });

    xhr.title
  }
}


createList(data){
  console.log(data)
  // let id = `search-${Math.floor(Math.random() * 900)}`,
  //     dl = document.createElement('data-list');
  // dl.setAttribute('list', id);
  // document.body.appendChild(dl)
  // this.input.id = id;
  // data.forEach( i => {
  //   let op = document.createElement('option');
  //   op.value = i.volumeInfo.title;
  //   dl.appendChild(op)
  // })
}
new peticion('.tar','https://www.googleapis.com/books/v1/volumes?q=HARRY')

// let xhr = new XMLHttpRequest();
// xhr.open('GET' ,'https://www.googleapis.com/books/v1/volumes?q=HARRY')
// xhr.send()
// xhr.addEventListener('loadend' , () => {
//   let all = JSON.parse(xhr.responseText);
//   all.items.map(i => {
//     console.log(i.volumeInfo.title)
//   })
//
// } )
