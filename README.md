# MOODV. ##

An application that uses three metrics to determine your mood and recommends two top-rated IMDB films based on the result.

We use a weather forecasting API (DarkSky), a Rorschach psychological test and a users colour preference to determine their mood.
---

**IMDB API**

https://www.npmjs.com/package/imdb-api

Returns movie details from these sources... 
* IMDB
* Rotten Tomatoes
* Metacritic

---
## Object returned example. ## 
Keep in mind not all properties will contain values depending on the popularity of the movie.

```javascript
Movie {
  title: 'The Shawshank Redemption',
  _year_data: '1994',
  year: 1994,
  rated: 'R',
  released: 1994-10-13T23:00:00.000Z,
  runtime: '142 min',
  genres: 'Drama',
  director: 'Frank Darabont',
  writer: 'Stephen King (short story "Rita Hayworth and Shawshank Redemption"), Frank Darabont (screenplay)',
  actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
  plot: 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man\'s unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
  languages: 'English',
  country: 'USA',
  awards: 'Nominated for 7 Oscars. Another 19 wins & 32 nominations.',
  poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  ratings: 
   [ { Source: 'Internet Movie Database', Value: '9.3/10' },
     { Source: 'Rotten Tomatoes', Value: '91%' },
     { Source: 'Metacritic', Value: '80/100' } ],
  metascore: '80',
  rating: 9.3,
  votes: '2,005,476',
  imdbid: 'tt0111161',
  type: 'movie',
  dvd: '27 Jan 1998',
  boxoffice: 'N/A',
  production: 'Columbia Pictures',
  website: 'N/A',
  response: 'True',
  name: 'The Shawshank Redemption',
  series: false,
  imdburl: 'https://www.imdb.com/title/tt0111161' }
  ```

### Methods ###
* searchMovieByTitle() - Returns array with movie objects that match title.
  * title( string )


```javascript
getMovieByTitle(title);
```
---






