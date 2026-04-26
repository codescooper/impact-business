import Image from 'next/image';

type BrandLogoProps = {
  compact?: boolean;
  priority?: boolean;
};

export function BrandLogo({ compact = false, priority = false }: BrandLogoProps) {
  if (compact) {
    return (
      <Image
        src="/assets/impact-business-logo-symbol.svg"
        alt="Impact Business – Votre succès est notre impact"
        width={44}
        height={44}
        priority={priority}
        className="h-11 w-11 object-contain"
      />
    );
  }

  return (
    <Image
      src="/assets/impact-business-logo-full.svg"
      alt="Impact Business – Votre succès est notre impact"
      width={260}
      height={66}
      priority={priority}
      className="h-auto w-[210px] object-contain sm:w-[250px]"
    />
  );
}
