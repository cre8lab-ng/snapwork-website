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
    <div className={`text-center component-spacing ${className}`}>
      <div className="inline-block">
        <h2 className="text-h1">
          {title}
        </h2>
        {showUnderline && (
          <div className="flex justify-center element-spacing">
            <div className={animated ? "wavy-animation" : ""}>
              <Icon name="underline" color="stroke-orange-100" />
            </div>
          </div>
        )}
      </div>

      {subtitle && (
        <p className="text-subtitle text-center mx-auto element-spacing max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}