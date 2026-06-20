export function connectPeer(id: string) {
  return {
    peerId: id,
    status: "connected"
  };
}
