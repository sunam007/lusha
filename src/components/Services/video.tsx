export function Video() {
return (
  <video
  preload="none"
  autoPlay
  muted
  loop
  className=" lg:block"
   >
    <source src="video/pin-point-ideal-customer.mp4" type="video/mp4" />
  </video>
);
}

export default Video