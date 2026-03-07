import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '2m',
};

export default function () {
  http.get('http://20.103.186.102');
  sleep(1);
}