interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({ title, subtitle, align = 'center' }: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-2xl mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
        {title}
      </h2>
      <p className="text-zinc-500 text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;