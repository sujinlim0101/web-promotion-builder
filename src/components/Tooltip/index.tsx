import { ReactNode, useState } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({
  content,
  children,
  position = "bottom",
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getTooltipStyles = () => {
    const tooltipStyles: React.CSSProperties = {
      position: "absolute",
      zIndex: 10,
      padding: "0.5rem",
      fontSize: "0.75rem",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "black",
      borderRadius: "0.25rem",
      boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)",
    };

    switch (position) {
      case "top":
        tooltipStyles.bottom = "100%";
        tooltipStyles.left = "50%";
        tooltipStyles.transform = "translateX(-50%)";
        break;
      case "bottom":
        tooltipStyles.top = "100%";
        tooltipStyles.left = "50%";
        tooltipStyles.transform = "translateX(-50%)";
        break;
      case "left":
        tooltipStyles.right = "100%";
        tooltipStyles.top = "50%";
        tooltipStyles.transform = "translateY(-50%)";
        break;
      case "right":
        tooltipStyles.left = "100%";
        tooltipStyles.top = "50%";
        tooltipStyles.transform = "translateY(-50%)";
        break;
    }

    return tooltipStyles;
  };

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="relative"
    >
      {children}
      {
        <div
          id="tooltip-bottom"
          role="tooltip"
          style={getTooltipStyles()}
          className={`absolute z-10 bg-gray-800 rounded-lg tooltip
						${position === "top" || position === "bottom" ? "my-4" : ""}
						${position === "left" || position === "right" ? "mx-4" : ""}
            ${showTooltip ? "opacity-80" : "opacity-0 pointer-events-none"}
          `}
        >
          {content}
        </div>
      }
    </div>
  );
};
