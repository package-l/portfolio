import '../Blob.css'
import { spline } from 'https://cdn.skypack.dev/@georgedoescode/spline@1.0.1';
import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise@2.4.0';

const Blob = () => {

  const path = document.querySelector('path');
  // used to set our custom property values
  const root = document.documentElement;

  
  return (
    <>
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop id="gradientStop1" offset="0%" stop-color="var(--startColor)" />
              <stop id="gradientStop2 " offset="100%" stop-color="var(--stopColor)" />
          </linearGradient>
        </defs>
        <path d="" fill="url('#gradient')"></path>
      </svg>
    </>
  )
}

export default Blob
