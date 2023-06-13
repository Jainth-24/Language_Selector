
import "./page.css"


export default function Home() {

 const list =[
  {
    contient: 'North America',
    Info: [{
      Country: 'Argentina / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Brasil / Português',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Chile / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Colombia / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Ecuador / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Panamá / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Perú / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Venezuela / Español',
      url: 'https://www.ef.com/ca/'
    },
    ],

  },
  {
  contient: 'Central and South America',
  Info: [{
    Country: 'Argentina / Español',
    url: 'https://www.ef.com/ca/'
  },
  {
    Country: 'Brasil / Português',
    url: 'https://www.ef.com/ca/'
  },
  {
    Country: 'Chile / Español',
    url: 'https://www.ef.com/ca/'
  },
  {
    Country: 'Colombia / Español',
    url: 'https://www.ef.com/ca/'
  },
  {
    Country: 'Ecuador / Español',
    url: 'https://www.ef.com/ca/'
  },
  {
    Country: 'Panamá / Español',
    url: 'https://www.ef.com/ca/'
  },
  {
    Country: 'Perú / Español',
    url: 'https://www.ef.com/ca/'
  },
  {
    Country: 'Venezuela / Español',
    url: 'https://www.ef.com/ca/'
  },
  ],
},
  {
    contient: 'Europe',
    Info: [{
      Country: 'Argentina / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Brasil / Português',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Chile / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Colombia / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Ecuador / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Panamá / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Perú / Español',
      url: 'https://www.ef.com/ca/'
    },
    {
      Country: 'Venezuela / Español',
      url: 'https://www.ef.com/ca/'
    },
    ],
    },
    {
      contient: 'Middle East and Africa',
      Info: [{
        Country: 'Argentina / Español',
        url: 'https://www.ef.com/ca/'
      },
      {
        Country: 'Brasil / Português',
        url: 'https://www.ef.com/ca/'
      },
      {
        Country: 'Chile / Español',
        url: 'https://www.ef.com/ca/'
      },
      {
        Country: 'Colombia / Español',
        url: 'https://www.ef.com/ca/'
      },
      {
        Country: 'Ecuador / Español',
        url: 'https://www.ef.com/ca/'
      },
      {
        Country: 'Panamá / Español',
        url: 'https://www.ef.com/ca/'
      },
      {
        Country: 'Perú / Español',
        url: 'https://www.ef.com/ca/'
      },
      {
        Country: 'Venezuela / Español',
        url: 'https://www.ef.com/ca/'
      },
      ],
    },

  
 ]

  return (
    <>
      <h1>Choose Language</h1>
      {list.map((x)=>(
        <>
          <h2>{x.contient}</h2>
          <ul className="grid-container">
          { x.Info.map((y)=>
            (
              <li className="gridItem"><span><img src="https://clipart-library.com/image_gallery/242723.gif" height='20px'></img></span><a href={y.url}>{y.Country}</a></li>
            )
          )
          }
      </ul>
        </>
      ))}
      
    </>
  )
}
