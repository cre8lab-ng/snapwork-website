import Icon from "./icon";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showUnderline?: boolean;
  animated?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  showUnderline = true,
  animated = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className="inline-block">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight drop-shadow-lg text-darkblue">
          {title}
        </h3>
        {showUnderline && (
          <div className="flex justify-center mb-4">
            <div className={animated ? "wavy-animation" : ""}>
              <Icon name="underline" color="stroke-orange-100" />
            </div>
          </div>
        )}
      </div>

      {subtitle && (
        <p className="text-center mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-darkblue">
          {subtitle}
        </p>
      )}
    </div>
  );
}