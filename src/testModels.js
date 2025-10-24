
import fetch from 'node-fetch';

const API_KEY = 'AIzaSyDIdMKukv4vwDVCMv9Ho9Y6bR5CfnwXmDI'; // Replace with your actual API key

async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

listModels();
