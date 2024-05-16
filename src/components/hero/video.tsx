export function Video() {
  const styles = {
    // height: '100%',
    objectFit: 'cover',
    objectPosition: 'bottom',
    position: 'absolute',
    left: 0,
    minHeight:'650px',
    marginTop: "-80px"
};
return (
  <video
  width={1902}
  height={730}
  style={styles}
  preload="none"
  autoPlay
  muted
  loop
  className="hidden lg:block"
   >
    <source src="video/hero_vid.mp4" type="video/mp4" />
    <track
      src="/path/to/captions.vtt"
      kind="subtitles"
      srcLang="en"
      label="English"
    />
    Your browser does not support the video tag.
  </video>
);
}

export default Video