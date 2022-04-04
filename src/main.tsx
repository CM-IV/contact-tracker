import axios from 'axios';
import { render } from 'preact';
import { App } from './app';
import './style/index.css';

axios.defaults.baseURL = "http://localhost:3333/api";

render(<App />, document.body);
