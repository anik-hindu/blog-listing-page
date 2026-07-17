import "./Hero.css";

export default function HeroBanner() {
  return (
    <section className="hero">
      <img
        src="/icons/hero-leaf.png"
        alt=""
        aria-hidden="true"
        className="hero__leaf hero__leaf--left"
      />

      <div className="hero__content">
        <h1 className="hero__title">Bappa Ayurveda</h1>
        <div className="hero__divider">
          <span></span>
          <img src="/icons/logo.png" alt="" aria-hidden="true" />
          <span></span>
        </div>
        <p className="hero__tagline">Ancient Wisdom. Modern Wellness.</p>
      </div>

      <img
        src="/icons/hero-leaf.png"
        alt=""
        aria-hidden="true"
        className="hero__leaf hero__leaf--right"
      />
    </section>
  );
}
