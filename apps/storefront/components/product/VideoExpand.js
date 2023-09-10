"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoExpand = void 0;
const outline_1 = require("@heroicons/react/outline");
const react_1 = __importDefault(require("react"));
const media_1 = require("@/lib/media");
function VideoExpand({ video, onRemoveExpand }) {
  if (!video) {
    return null;
  }
  const videoId = (0, media_1.getYouTubeIDFromURL)(video.url);
  if (!videoId) {
    return null;
  }
  return (
    <div className="min-h-screen absolute grid grid-cols-1 mx-auto px-8 md:h-full w-full bg-gray-100">
      <div
        role="button"
        tabIndex={0}
        className="absolute grid h-6 justify-end w-full z-40 p-8 lg:px-8 mx-auto"
        onClick={() => onRemoveExpand()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onRemoveExpand();
          }
        }}
      >
        <outline_1.XIcon className="w-6 h-6" />
      </div>
      <div className="w-full h-full absolute md:mt-10 flex justify-center items-center">
        <iframe
          title={video.alt || "Video"}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          className="w-full h-4/5 md:w-4/5"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>
  );
}
exports.VideoExpand = VideoExpand;
exports.default = VideoExpand;
