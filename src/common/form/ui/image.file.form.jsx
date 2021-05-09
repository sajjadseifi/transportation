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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  //car avatar upload2 setting
  return (
    <div className="dropzone-box-base">
      <input {...getInputProps()} />
      <label className="label-form-title text-muted-light" htmlFor={name}>
        {title}
      </label>
      <div {...getRootProps()} className="d-flex justify-content-center">
        <div className="dropzone-box">
          {imageUri ? (
            <img width="100%" height="100%" src={imageUri} />
          ) : (
            <Icon icon={icon} size="5x" />
          )}
        </div>
      </div>
    </div>
  );
}
