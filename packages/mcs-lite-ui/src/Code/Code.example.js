import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Code from '.';

storiesOf('Code', module)
  .add(
    'API',
    withInfo({
      text: 'https://github.com/conorhastings/react-syntax-highlighter#props',
      inline: true,
    })(() =>
      <Code>
        {`var data = {
  datapoints:
    [{dataChnId: "Map", values: {latitude: 12, longitude: 13, altitude: 14}}]
};

$.ajax({
  type: "POST",
  url: "https://api.mediatek.com/mcs/v2/devices/DzdpHYIZ/datapoints",
  headers: { deviceKey: "Cio34Lj7Na5RmQXj" },
  contentType: "application/json",
  data: JSON.stringify(data)
})
.done(function(data){
  // your content
})`}
      </Code>,
    ),
  )
  .add(
    'With language props',
    withInfo({
      text: '["javascript", "cpp", "arduino"]',
      inline: true,
    })(() =>
      <Code language="arduino">
        {`include <HttpClient.h>
include <EthernetClient.h>

EthernetClient content;
HttpClient http(content);

content.println("POST /mcs/v2/devices/DzdpHYIZ/datapoints.csv HTTP/1.1");
#hint! Please do not add excessive spaces

String data = "inte,,123"

#hint! Please do not add excessive spaces
#timestamp is in unix-time format the milliseconds and is optional. If not provided,

#system will generate timestamp at the time of receiving this API
int dataLength = data.length();

content.println("Host: api.mediatek.com");
content.println("deviceKey: Cio34Lj7Na5RmQXj");
content.print("Content-Length: ");
content.println(dataLength);`}
      </Code>,
    ),
  );
