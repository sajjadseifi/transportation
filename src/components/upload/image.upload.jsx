import React from "react";
import { Alert, Uploader, Loader, Icon } from "rsuite";

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const styles = {
  width: 150,
  height: 150,
};

const ImageUploader = ({ action }) => {
  const [uploading, setUploading] = React.useState(false);
  const [fileInfo, setFileInfo] = React.useState(null);

  return (
    <Uploader
      fileListVisible={false}
      listType="picture"
      headers={{
        method: "PUT",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      }}
      action={action}
      onUpload={(file) => {
        setUploading(true);
        previewFile(file.blobFile, (value) => {
          setFileInfo(value);
        });
      }}
      onSuccess={(response, file) => {
        setUploading(false);
        Alert.success("Uploaded successfully");
        console.log(response);
      }}
      onError={() => {
        setFileInfo(null);
        setUploading(false);
        Alert.error("Upload failed");
      }}
    >
      <button style={styles}>
        {uploading && <Loader backdrop center />}
        {fileInfo ? (
          <img src={fileInfo} width="100%" height="100%" />
        ) : (
          <Icon icon="avatar" size="5x" />
        )}
      </button>
    </Uploader>
  );
};

export default ImageUploader;
