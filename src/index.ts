import axios from 'axios';
import csv from 'csvtojson/v2';
import { join } from 'path';
import { creds } from './config';
import { sequences } from './procedure';
import Promise from 'bluebird';

/**
 * CSV Headers: 
 * device,ip
 * 7945,10.x.x.x
 */
const parseCsv = () =>
  csv().fromFile(join(__dirname, './devices.csv'))

const req = (ip, data) => {
  return axios({
    url: `http://${ip}/CGI/Execute`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: { username: creds.username, password: creds.password },
    data: `XML=${encodeURI(data)}`,
    method: 'POST'
  }).then(({ data }) => data);
}
parseCsv().then(devices => {
  return Promise.map(devices, ({ ip }) => {
    return Promise.mapSeries(sequences, seq =>
      req(ip, seq).then(res => {
        console.log(res)
        return Promise.delay(550).thenReturn()
      }))
  })
})