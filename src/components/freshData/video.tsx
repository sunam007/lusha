export function Video() {
return (
  <video
  preload="none"
  autoPlay
  muted
  loop
  className=" lg:block"
   >
    <source src="video/fresh-data.mp4" type="video/mp4" />
  </video>
);
}

export default Video