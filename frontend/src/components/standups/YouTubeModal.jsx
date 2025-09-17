import {useState} from "react";

export default function YouTubeModal({standup}) {

    const [open, setOpen] = useState(false);

    function toEmbedUrl(url){
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    return(
        <div className="flex items-center justify-center relative h-[100vh]">
                <button className="w-[8vh] relative cursor-pointer "
                        onClick={() => setOpen(true)}>
                    <svg className="text-white " viewBox="0 0 90 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90 52L0 104L4.54262e-06 0L90 52Z" fill="currentColor"></path>
                    </svg>
                </button>
                {open && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                      <div className="relative w-[80vw] max-w-[1280px]">
                        <iframe
                          className="w-full h-[45vw] max-h-[720px]"
                          src={toEmbedUrl(standup.standup_url)}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                        <button
                          onClick={() => setOpen(false)}
                          className="absolute top-9 right-12 text-white/40 text-2xl cursor-pointer"
                        >
                          ✕
                        </button>
                    </div>
                  )}
            </div>
    );
}