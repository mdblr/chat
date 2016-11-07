import io from 'socket.io-client';

export default function sockets() {
  const socket = io.connect();

  return {
    on,
    emit
  }
}
