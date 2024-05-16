export function Video() {
  return (
    <video width="800" height="600"  preload="none" autoPlay muted loop className="">
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