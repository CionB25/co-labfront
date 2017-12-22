import { headers } from '../authorization/headers';

const localhostUrl = "http://localhost:3000/api/v1"

export function fetchSongs(songSearchTerm, cb) {
  fetch(`${localhostUrl}/songs?q=${songSearchTerm}`, { headers: headers() })
}


fetch(url, { headers: headers }).then(resp => resp.json())
.then(res => console.log(res))
