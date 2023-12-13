import { useEffect } from "react";

interface ShareButtonProps {
  title: string;
  buttonStyle: string;
}
export default function ShareButton({title, buttonStyle}: ShareButtonProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      className="twitter-share-button"
      data-show-count="false"
    >
      {`${title}にシェアする`}
    </a>
  );
}
