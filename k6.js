import http from 'k6/http';

export const options = {
  duration: '1s',
  vus: 1,
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  http.get('https://new-media-asicdn.azureedge.net/images/orig/1010555.webp');
}
