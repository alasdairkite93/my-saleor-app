"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductGallery = void 0;
const outline_1 = require("@heroicons/react/outline");
const clsx_1 = __importDefault(require("clsx"));
const image_1 = __importDefault(require("next/legacy/image"));
const react_1 = require("react");
const ImageExpand_1 = require("@/components/product/ImageExpand");
const VideoExpand_1 = require("@/components/product/VideoExpand");
const media_1 = require("@/lib/media");
function ProductGallery({ product, selectedVariant }) {
  const [expandedImage, setExpandedImage] = (0, react_1.useState)(undefined);
  const [videoToPlay, setVideoToPlay] = (0, react_1.useState)(undefined);
  const galleryMedia = (0, media_1.getGalleryMedia)({ product, selectedVariant });
  return (
    <>
      <div
        className={(0, clsx_1.default)(
          "mt-1 mb-2 w-full max-h-screen grid grid-cols-1 gap-2 md:h-full h-96 overflow-scroll scrollbar-hide",
          galleryMedia.length > 1 && "md:grid-cols-2 md:col-span-2"
        )}
        style={{
          scrollSnapType: "both mandatory",
        }}
      >
        {galleryMedia === null || galleryMedia === void 0
          ? void 0
          : galleryMedia.map((media) => {
              const videoThumbnailUrl = (0, media_1.getVideoThumbnail)(media.url);
              return (
                <div
                  key={media.url}
                  className="aspect-w-1 aspect-h-1"
                  style={{
                    scrollSnapAlign: "start",
                  }}
                >
                  {media.type === "IMAGE" && (
                    <image_1.default
                      onClick={() => setExpandedImage(media)}
                      src={media.url}
                      alt={media.alt}
                      layout="fill"
                      objectFit="cover"
                      role="button"
                      tabIndex={-2}
                      priority
                    />
                  )}
                  {media.type === "VIDEO" && (
                    <div
                      role="button"
                      tabIndex={-2}
                      onClick={() => {
                        setVideoToPlay(media);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setVideoToPlay(media);
                        }
                      }}
                    >
                      {videoThumbnailUrl && (
                        <image_1.default
                          src={videoThumbnailUrl}
                          alt={media.alt}
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 absolute w-full h-full flex justify-center items-center bg-transparent">
                        <outline_1.PlayIcon className="h-12 w-12" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
      </div>
      {expandedImage && (
        <div className="absolute min-h-screen min-w-screen h-full w-full top-0 bottom-0 left-0 right-0 z-40">
          <ImageExpand_1.ImageExpand
            image={expandedImage}
            onRemoveExpand={() => setExpandedImage(undefined)}
          />
        </div>
      )}

      {videoToPlay && (
        <div className="absolute min-h-screen min-w-screen top-0 bottom-0 left-0 right-0 z-40">
          <VideoExpand_1.VideoExpand
            video={videoToPlay}
            onRemoveExpand={() => setVideoToPlay(undefined)}
          />
        </div>
      )}
    </>
  );
}
exports.ProductGallery = ProductGallery;
