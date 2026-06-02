import * as React from "react";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
  onComplete?: () => void;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className = "",
  textClassName = "",
  onComplete
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let textIndex = 0;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let isFinished = false;

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        const f1 = Math.min(Math.max(fraction, 0.001), 1);
        const f2 = Math.min(Math.max(1 - fraction, 0.001), 1);

        text2Ref.current.style.filter = `blur(${Math.min(8 / f1 - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(f1, 0.4) * 100}%`;

        text1Ref.current.style.filter = `blur(${Math.min(8 / f2 - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(f2, 0.4) * 100}%`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    let animationFrameId: number;

    function animate() {
      if (isFinished) return;
      
      animationFrameId = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = textIndex + 1;
          
          // Check if we reached beyond the end
          if (textIndex >= texts.length - 1) {
            isFinished = true;
            if (text1Ref.current && text2Ref.current) {
              text1Ref.current.style.opacity = "0%";
              text2Ref.current.style.opacity = "100%";
              text2Ref.current.textContent = texts[texts.length - 1];
            }
            if (onComplete) {
              setTimeout(() => {
                onComplete();
              }, 1200);
            }
            return;
          }

          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    // Set initial text content
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[0];
      text2Ref.current.textContent = texts[1] || "";
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [texts, morphTime, cooldownTime, onComplete]);

  return (
    <div className={`relative ${className}`}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center min-h-[140px]"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={`absolute inline-block select-none text-center text-4xl sm:text-6xl md:text-8xl font-black ${textClassName}`}
          style={{ opacity: 0 }}
        />
        <span
          ref={text2Ref}
          className={`absolute inline-block select-none text-center text-4xl sm:text-6xl md:text-8xl font-black ${textClassName}`}
          style={{ opacity: 1 }}
        />
      </div>
    </div>
  );
}
export default GooeyText;
