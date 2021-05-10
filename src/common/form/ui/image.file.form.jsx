import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "rsuite";

export default function ImageFileForm({
  icon = "upload2",
  name,
  file,
  title,
  uri,
  onChangeFile = () => {},
}) {
  const [imageUri, setImageUri] = useState(uri);

  useEffect(() => {
    setImageUri(uri);
  }, [uri]);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (imageUri) URL.revokeObjectURL(imageUri);

    const uri = URL.createObjectURL(file);
    setImageUri(uri);
    onChangeFile({ file, acceptedFiles, name, uri });
  }, []);
  const deleteImageHandler = () => {
    URL.revokeObjectURL(imageUri);
    setImageUri();
    onChangeFile({
      file: null,
      acceptedFiles: [],
      name,
      uri: imageUri,
    });
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  //car avatar upload2 setting
  return (
    <div className="py-4 d-flex justify-content-center dropzone-box-base">
      <input {...getInputProps()} />

      <div className="box-all">
        <div className="close-box">
          {imageUri && (
            <Icon
              onClick={deleteImageHandler}
              className="icon-close"
              icon="close"
              size="2x"
            />
          )}
        </div>
        <div
          {...getRootProps()}
          className={`dropzone-box ${isDragActive ? "is-active-drag" : ""}`}
        >
          {imageUri ? (
            <img width="100%" height="100%" src={imageUri} />
          ) : (
            <Icon icon={icon} size="5x" />
          )}
        </div>
        <label
          {...getRootProps()}
          className="label-form-title text-muted-light"
          htmlFor={name}
        >
          {title}
        </label>
      </div>
    </div>
  );
}
