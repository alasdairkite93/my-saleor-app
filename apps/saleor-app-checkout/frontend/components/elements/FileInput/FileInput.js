"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const macaw_ui_1 = require("@saleor/macaw-ui");
const image_1 = __importDefault(require("next/legacy/image"));
const react_1 = __importStar(require("react"));
const styles_1 = require("./styles");
const clsx_1 = __importDefault(require("clsx"));
const react_intl_1 = require("react-intl");
const messages_1 = require("./messages");
const FileInput = ({ name, label, alt, value, onChange, onBlur }) => {
  const classes = (0, styles_1.useStyles)();
  const anchor = (0, react_1.useRef)(null);
  const [src, setSrc] = react_1.default.useState(value);
  (0, react_1.useEffect)(() => {
    if (value !== src) {
      setSrc(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const handleFileUploadButtonClick = () => anchor.current.click();
  const handleDragEvent = (event) => {
    event.preventDefault();
  };
  const handleFileDrop = (event) => {
    event.preventDefault();
    onChange(event);
    const files = event.dataTransfer.files;
    setSrc(URL.createObjectURL(files[0]));
  };
  const handleFileChange = (event) => {
    event.preventDefault();
    onChange(event);
    const files = event.target.files;
    if (files) {
      setSrc(URL.createObjectURL(files[0]));
    }
  };
  const handleFileDelete = () => {
    anchor.current.value = "";
    onChange({
      target: {
        name,
        value: "",
      },
    });
    setSrc(undefined);
  };
  return (
    <div
      className={classes.root}
      onDragOver={handleDragEvent}
      onDragEnter={handleDragEvent}
      onDragLeave={handleDragEvent}
      onDrop={handleFileDrop}
      onBlur={onBlur}
    >
      <core_1.Typography variant="body2" className={classes.label}>
        {label}
      </core_1.Typography>
      {!src && (
        <div className={classes.uploadField}>
          <>
            <core_1.Typography variant="body2" className={classes.uploadLabel}>
              <react_intl_1.FormattedMessage {...messages_1.messages.dragImage} />
            </core_1.Typography>
            <core_1.Typography
              variant="caption"
              className={(0, clsx_1.default)(classes.uploadLabel, classes.uploadSizeLabel)}
            >
              <react_intl_1.FormattedMessage {...messages_1.messages.maxFileSize} />
            </core_1.Typography>
            <macaw_ui_1.Button
              variant="tertiary"
              className={classes.uploadButton}
              endIcon={<macaw_ui_1.PlusIcon />}
              onClick={handleFileUploadButtonClick}
            >
              <react_intl_1.FormattedMessage {...messages_1.messages.uploadFile} />
            </macaw_ui_1.Button>
          </>
        </div>
      )}
      {src && (
        <div className={classes.mediaContainer}>
          <image_1.default
            className={classes.media}
            src={src}
            alt={alt}
            layout="fill"
            loader={({ src }) => src}
          />
          <div className={classes.mediaOverlay}>
            <div className={classes.mediaToolbar}>
              <macaw_ui_1.IconButton
                color="primary"
                className={classes.mediaToolbarIcon}
                onClick={handleFileDelete}
              >
                <macaw_ui_1.DeleteIcon />
              </macaw_ui_1.IconButton>
            </div>
          </div>
        </div>
      )}
      <input
        name={name}
        className={classes.input}
        onChange={handleFileChange}
        type="file"
        ref={anchor}
        accept="image/*"
      />
    </div>
  );
};
exports.default = FileInput;
