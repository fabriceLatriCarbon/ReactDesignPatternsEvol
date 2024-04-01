import { useEffect, useRef, useState } from 'react';
import { cn } from '@utils/cn';
import { createNoise3D } from 'simplex-noise';
import useAppTheme from '@commonHooks/useAppTheme';

type WavyBackgroudProps = React.PropsWithChildren &
  Record<string, unknown> &
  Partial<{
    className: string;
    containerClassName: string;
    colors: string[];
    waveWidth: number;
    backgroundFill: string;
    blur: number;
    speed: 'slow' | 'fast';
    waveOpacity: number;
  }>;

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = 'slow',
  waveOpacity = 0.5,
  ...props
}: WavyBackgroudProps) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001;
      case 'fast':
        return 0.002;
      default:
        return 0.001;
    }
  };

  const { appTheme } = useAppTheme();

  const init = () => {
    canvas = canvasRef.current;

    if (!canvas) return;
    ctx = canvas.getContext('2d');

    if (!ctx) return;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      if (!ctx) return;
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'];
  const drawWave = (n: number) => {
    nt += getSpeed();

    if (!ctx) return;

    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth ?? 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    if (!ctx) return;

    ctx.fillStyle = backgroundFill || appTheme === 'dark' ? '#1e2027' : '#eeeeee';
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(colors?.length ?? 5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appTheme]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome')
    );
  }, []);

  return (
    <div className={cn('h-80 flex flex-col items-center justify-center', containerClassName)}>
      <canvas
        className='absolute inset-0 top-[65px] z-0'
        ref={canvasRef}
        id='canvas'
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {})
        }}
      ></canvas>
      <div className={cn('relative z-1', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
