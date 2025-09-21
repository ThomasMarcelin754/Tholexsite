import Image from 'next/image';

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/images/logo-tholex.svg"
      alt="Tholex"
      width={size}
      height={size}
      priority
    />
  );
}

export default Logo;
