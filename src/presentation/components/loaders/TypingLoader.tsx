interface TypingLoaderProps {
  className?: string;
}
export default function TypingLoader({ className }: TypingLoaderProps) {
  return (
    <div className={`typing ${className}`}>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
    </div>
  );
}
