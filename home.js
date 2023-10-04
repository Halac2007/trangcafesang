fetch(`https://plo.vn/rss/giao-duc-21.rss`)
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
  .then((data) => {
    console.log(data)

    const items = data.querySelectorAll('item')
    let html = ``
    items.forEach((el) => {
      console.log(el.querySelector('title').innerHTML.replace('<![CDATA[', '').replace(']]>', ''))

      const title = (document.querySelector('.titleh1').innerHTML = `<a href="${el.querySelector('link').getAttribute('href')}">
      ${el.querySelector('title').innerHTML.replace('<![CDATA[', '').replace(']]>', '')}`)
      // console.log(el.querySelector('link').getAttribute('href'))
      html += `
      <article>
      <a href="${el.querySelector('link').getAttribute('href')}">
      <img src="${el.querySelector('image').innerHTML}" alt="">
      </a>
      <h2>
      <a href="${el.querySelector('link').getAttribute('href')}">
      ${el.querySelector('title').innerHTML.replace('<![CDATA[', '').replace(']]>', '')}
      </a>
      </h2>
      </article>
       
      `
    })
  })
