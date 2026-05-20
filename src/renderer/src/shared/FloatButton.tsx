import React from "react";
import { useNavigate } from "react-router";

interface CircularButtonProps {
    routeTo: string;
    label?: string;
    children?: React.ReactNode;
}


const CircularButton: React.FC<CircularButtonProps> = ({
    routeTo,
    label = "✚",
    children,
}) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        console.log(routeTo)
        navigate(`/${routeTo}`)
    };
    

    return (
        <button
            onClick={handleClick}
            aria-label={label}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#6366f1",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.2s ease, transform 0.1s ease",
                boxShadow: "0 2px 8px rgba(99, 102, 241, 0.4)",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4f46e5";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#6366f1";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
            onMouseDown={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
            }}
        >
            {children ?? label}
        </button>
    );
};

export default CircularButton;
