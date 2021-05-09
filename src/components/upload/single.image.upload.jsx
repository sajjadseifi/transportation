import React, { useState } from "react";
import { useRef } from "react";
import { Alert } from "rsuite";
const styles = {
  width: 150,
  height: 150,
};

const SingleImageUpload = ({
  formId,
  displayName,
  image,
  icon,
  name,
  formKey,
  agentPostUplaod = (formData, config = {}) => {},
  agentPutUplaod = (formData, config = {}) => {},
}) => {
  const ref = useRef();
  const [fileInfo, setFileInfo] = useState(null);
  const [uploading, setUploading] = useState(false);
  function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }
  const onChange = (e) => {
    if (!ref.current) return;
    const file = ref.current.files[0];
    previewFile(file, (res) => {
      setFileInfo(res);
    });
    const formData = new FormData();
    formData.append(formKey || name, file);
    uploadHandler(formData);
  };

  const uploadHandler = async (formData) => {
    setUploading(true);
    try {
      const response = formId
        ? await agentPutUplaod(formId, formData)
        : await agentPostUplaod(formData);
    } catch {
      Alert.warning(`خظا در هنگام اپلود عکس ${displayName} دوباره امتحان کنید`);
    } finally {
      setUploading(false);
    }
  };
  return (
    <button style={styles}>
      <input
        ref={ref}
        onChange={onChange}
        type="file"
        accept=".jpg,.png,.wma"
      />
      {uploading && <Loader backdrop center />}
      {fileInfo ? (
        <img src={fileInfo} width="100%" height="100%" />
      ) : (
        <Icon icon="avatar" size="5x" />
      )}
    </button>
  );
};

export default SingleImageUpload;
