"use client";
import mqtt from "mqtt"; // import namespace "mqtt"

var options = {
  username: "cyberai",
  password: "Min2kota",
};
const client = mqtt.connect(
  "wss://0894e758ae594242b41480fb24e2f7de.s1.eu.hivemq.cloud:8884/mqtt",
  options
);

export default client;
