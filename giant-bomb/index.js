const latestVideos = [
  {
    tag: 'Quick Look',
    title: 'Kingdom Hearts: Melody of Memory',
    time: '20 hours ago',
    image: 'quick-look.png'
  },
  {
    title: 'The Community Spotlight 2020.11.21',
    time: '2 days ago',
    image: 'community-spotlight.png'
  },
  {
    tag: 'Party of One',
    title: 'Fuser and 40s',
    time: '3 days ago',
    image: 'party-of-one.png'
  },
  {
    title: 'Giant Bomb Premium is On Sale Now!',
    time: '3 days ago',
    image: 'black-friday-sale.png'
  },
  {
    title: 'Black Friday Sale: Take 20% Off All Giant Bomb Merch Until 11/30!',
    time: '3 days ago',
    image: 'new-merch.png'
  },
]

const latestSection = document.querySelector('.latest')

latestVideos.forEach(video => {
  const article = document.createElement('article')
  const image = document.createElement('img')
  const h3 = document.createElement('h3')
  const time = document.createElement('p')

  image.src = `assets/${video.image}`
  image.alt = video.title
  image.className = 'video'

  video.tag
    ? h3.innerHTML = `<span class='tag'>${video.tag}: </span>${video.title}`
    : h3.textContent = video.title

  time.textContent = video.time
  time.className = 'time'

  article.append(image, h3, time)
  latestSection.appendChild(article)
})