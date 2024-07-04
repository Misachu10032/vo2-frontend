import io from "socket.io-client";

import baseURL from '../config';

export const socket = io(baseURL);